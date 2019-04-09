import React from 'react';
import StreamFeedItem from './StreamFeedItem';
import {getStreamFeed} from '../../requests/streams';
import Lightbox from 'react-images';

class StreamFeed extends React.Component{
    state = {
        items: [],
        images: [],
        imageViewer: false,
        imageIndex: 0
    };

    componentDidMount(){
        const {streamItem} = this.props;
        getStreamFeed(streamItem.type, streamItem.network, streamItem.channel_id, streamItem.search_query).then((response) => {
            
            const items = typeof response["data"] !== "undefined" ? response["data"] : response;
            if(!items.length) return;

            this.setState(() => ({
                items: items
            }));
        });
    }

    setImages = (images, index = 0) => {
        this.setState(() => ({
          images,
          imageViewer: !this.state.imageViewer,
          imageIndex: index
        }));
    };

    render(){
        const {streamItem, channel} = this.props;
        const {imageViewer, imageIndex, images} = this.state;
        return (
            <div className="stream-feed scrollbar">
                {imageViewer && (
                    <Lightbox
                        currentImage={imageIndex}
                        images={images}
                        isOpen={imageViewer}
                        onClickPrev={() =>
                            this.setState({
                              imageIndex: (imageIndex + images.length - 1) % images.length,
                            })}
                        onClickNext={() =>
                            this.setState({
                              imageIndex: (imageIndex + 1) % images.length,
                            })}
                        onClose={() => this.setState({ imageViewer: false })}
                        />
                )}
                {this.state.items.length ? this.state.items.map((item, index) => (
                    <StreamFeedItem  feedItem={item} streamItem={streamItem} key={index} setImages={this.setImages} channel={channel}/>
                )) : <div>No data</div>}
            </div>
        );
    }
}

export default StreamFeed;