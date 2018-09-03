import React from 'react';
import { connect } from 'react-redux';
import BottomScrollListener from 'react-bottom-scroll-listener';
import UserList from "../../UserList";
import { getAccountTargets } from '../../../requests/twitter/channels';
import channelSelector from '../../../selectors/channels';
import Loader from '../../Loader';

class AccountTargets extends React.Component{
    state = {
        userItems: [],
        actions: 0,
        targets: [],
        loading: this.props.channelsLoading,
        searchView: false,
        page: 0
    }

    componentDidMount() {
        
        if(!this.props.channelsLoading){
            this.fetchTargets();
        }
    }

    componentDidUpdate(prevProps) {
        if((this.props.selectedChannel !== prevProps.selectedChannel)){
            this.fetchTargets();
        }
    }

    showSearchView = (searchView = false) => {
        this.setState(() => ({
            searchView
        }));

        if(!searchView){
            this.fetchTargets();
        }
    };

    setLoading = (loading = false) => {
        this.setState(() => ({
            loading
        }));
    };

    fetchTargets = () => {
        this.setLoading(true);
        getAccountTargets()
            .then((response) => {
                this.setState(() => ({
                    userItems: response.items,
                    actions: response.actions,
                    targets: response.targets,
                    loading: false,
                    page: 1
                }));
            }).catch((error) => {
                this.setLoading(false);
            });
    };

    loadMore = () => {
        this.setLoading(true);
        let page = this.state.page + 1;
        getAccountTargets(page)
            .then((response) => {
                this.setState((prevState) => ({
                    userItems: prevState.userItems.concat(response.items),
                    actions: response.actions,
                    page,
                    loading: false
                }));
            }).catch((error) => {
                this.setLoading(false);
            });
    };

    reloadTargets = (targets) =>{
        this.setState(() => ({
            targets
        }));
    };

    render(){
        return (
            <div>
                <h2>ACCOUNT TARGETS</h2>
                <UserList 
                    userItems={ this.state.userItems }
                    actionType="follow"
                    showTargetLink={true}
                    searchView={this.state.searchView}
                    showSearchView={this.showSearchView}
                    reloadTargets={this.reloadTargets}
                    targetType="account"
                    targets={this.state.targets}
                    actions={this.state.actions}
                    loading={this.state.loading}
                />
                <BottomScrollListener onBottom={this.loadMore} />
                {this.state.loading && <Loader />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const selectedTwitterChannel = {selected: 1, provider: "twitter"};
    const selectedChannel = channelSelector(state.channels.list, selectedTwitterChannel);

    return {
        channelsLoading: state.channels.loading,
        selectedChannel: selectedChannel.length ? selectedChannel[0] : {}
    };
};

export default connect(mapStateToProps)(AccountTargets);