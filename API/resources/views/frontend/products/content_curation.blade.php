@extends('layouts.homepage')

@section('content')

@include('frontend.includes.projects_menu')

<div class="product-pages">
    <div class="p-first-section">
        <div class="container">
            <div class="row standard-padding text-center">
                <div class="col-xs-12">
                    <h2>Simplify Your Social Content Curation</h2>
                    <p>Find & share content on the fly. Uniclix auto-suggests content relevant to your topics of interest so that you don’t have to spend hours searching on the internet.</p>
                    <img class="img-responsive" src="{{asset('/images/cr-image-1.svg')}}">
                </div>
            </div>

            <div class="row standard-padding">
                <div class="col-md-6 col-xs-12">
                    <h2>Discover Content</h2>
                    <p>Curate articles from thousands of sources that can base shared on the fly.</p>
                </div>
                <div class="col-md-6 col-xs-12">
                    <img class="img-responsive" src="{{asset('/images/cr-image-2.png')}}">
                </div>
            </div>

            <div class="row standard-padding">
                <div class="col-md-6 col-xs-12">
                    <img class="img-responsive" src="{{asset('/images/cr-image-3.png')}}">
                </div>
                <div class="col-md-6 col-xs-12">
                    <h2>Schedule Content</h2>
                    <p>Simply search streams by keyword to find curated content that you can share on the fly. No need to spends hours across the web searching for content</p>
                </div>
            </div>

            <div class="row standard-padding">
                <div class="col-md-6 col-xs-12">
                    <h2>Content Calendar</h2>
                    <p>Get an overview of your scheduled social media content displayed in the list</p>
                </div>
                <div class="col-md-6 col-xs-12">
                    <img class="img-responsive" src="{{asset('/images/cr-image-4.png')}}">
                </div>
            </div>

        </div>
    </div>

    @include('frontend.includes.compareplans')

    <div class="container standard-padding">
        <div class="row">
            <div class="col-xs-12 text-center">
                <h2>Learn more about twitter booster</h2>
                <p>Grow your community on Twitter by targeting the right audience. Think of our Booster tool as a matchmaker that connects you with people most interested in what you have to offer.</p>
                <div class="card panel-shadow mt50">
                    <h5>Twitter Booster</h5>
                    <p>Grow your community on Twitter by targeting the right audience.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
</div>

@include('frontend.includes.footer')

@endsection
