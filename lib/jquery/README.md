



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-486a2ba13121ca853388bbaabfb1482328e14fc6107d2c46137b73a1d2bfb9b7.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f394c6b8ddbb91fbd814d409b3204502f69480cd4aada42132ea0bbb1f37c0d8.css" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-2d5d1699983d8dd7c384c67dfc183fbace8e3a24866e8822069d599f68e71fb2.css" media="all" rel="stylesheet" />
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-3f02f299662c25f8ec0c230795ce959200de70fc6d39ba2f014f660f89f6301a.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-b34f54eabccd0ffa90e322cffdb0db239d492b9a986092f1aa602c5cf84d36b4.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jquery/README.md at master · jquery/jquery · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/70142?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jquery/jquery" name="twitter:title" /><meta content="jquery - jQuery JavaScript Library" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/70142?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="jquery/jquery" property="og:title" /><meta content="https://github.com/jquery/jquery" property="og:url" /><meta content="jquery - jQuery JavaScript Library" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="8D59E298:5EFE:2C5C6F89:57289D8B" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NGFhZmJlNGM5NjViYTU1NzM4MzVkYjg1ZWI3NGNmZDZkMDJkNDBiNzc1MGQ3Mzk4OGY1NWU5YTRlYjNkNDliZXx7InJlbW90ZV9hZGRyZXNzIjoiMTQxLjg5LjIyNi4xNTIiLCJyZXF1ZXN0X2lkIjoiOEQ1OUUyOTg6NUVGRToyQzVDNkY4OTo1NzI4OUQ4QiIsInRpbWVzdGFtcCI6MTQ2MjI3OTU2M30=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="03be76cef17034caf8e63d30e3aeca67d809465f" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="fdee73f62ee1dcbe50ba2f1537ee908d">
    

      
  <meta name="description" content="jquery - jQuery JavaScript Library">
  <meta name="go-import" content="github.com/jquery/jquery git https://github.com/jquery/jquery.git">

  <meta content="70142" name="octolytics-dimension-user_id" /><meta content="jquery" name="octolytics-dimension-user_login" /><meta content="167174" name="octolytics-dimension-repository_id" /><meta content="jquery/jquery" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="167174" name="octolytics-dimension-repository_network_root_id" /><meta content="jquery/jquery" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jquery/jquery/commits/master.atom" rel="alternate" title="Recent Commits to jquery:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/jquery/jquery/blob/master/README.md" data-pjax-transient>
  </head>


  <body class="logged-out   env-production  vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
    </a>

    <button class="btn-link right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path d="M11.41 9H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1z m0-4H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1zM0.59 11h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1z"></path></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-2" href="/login?return_to=%2Fjquery%2Fjquery%2Fblob%2Fmaster%2FREADME.md" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/jquery/jquery/search" class="js-site-search-form" data-scoped-search-url="/jquery/jquery/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fjquery%2Fjquery"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
    Watch
  </a>
  <a class="social-count" href="/jquery/jquery/watchers">
    3,249
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjquery%2Fjquery"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/jquery/jquery/stargazers">
      39,245
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjquery%2Fjquery"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
        Fork
      </a>

    <a href="/jquery/jquery/network" class="social-count">
      10,513
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/jquery" class="url fn" rel="author">jquery</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/jquery/jquery" data-pjax="#js-repo-pjax-container">jquery</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jquery/jquery" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jquery/jquery" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/jquery/jquery/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jquery/jquery/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">56</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/jquery/jquery/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /jquery/jquery/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">4</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/jquery/jquery/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /jquery/jquery/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>

  <a href="/jquery/jquery/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /jquery/jquery/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/jquery/jquery/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /jquery/jquery/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/jquery/jquery/blob/7f2ebd2c4dea186d7d981b939e6e2983a9d7f9c1/README.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:25521c81c93c1bbfda4b3ea35590479a -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jquery/jquery/blob/1.12-stable/README.md"
               data-name="1.12-stable"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="1.12-stable">
                1.12-stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jquery/jquery/blob/2.2-stable/README.md"
               data-name="2.2-stable"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="2.2-stable">
                2.2-stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jquery/jquery/blob/killphp/README.md"
               data-name="killphp"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="killphp">
                killphp
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jquery/jquery/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/3.0.0-beta1/README.md"
              data-name="3.0.0-beta1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.0-beta1">
                3.0.0-beta1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/3.0.0-alpha1/README.md"
              data-name="3.0.0-alpha1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.0-alpha1">
                3.0.0-alpha1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/3.0.0-alpha1+compat/README.md"
              data-name="3.0.0-alpha1+compat"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.0-alpha1+compat">
                3.0.0-alpha1+compat
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.2.3/README.md"
              data-name="2.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.3">
                2.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.2.2/README.md"
              data-name="2.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.2">
                2.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.2.1/README.md"
              data-name="2.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.1">
                2.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.2.0/README.md"
              data-name="2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.0">
                2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.4/README.md"
              data-name="2.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.4">
                2.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.3/README.md"
              data-name="2.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.3">
                2.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.2/README.md"
              data-name="2.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.2">
                2.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.1/README.md"
              data-name="2.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.1">
                2.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.1-rc2/README.md"
              data-name="2.1.1-rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.1-rc2">
                2.1.1-rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.1-rc1/README.md"
              data-name="2.1.1-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.1-rc1">
                2.1.1-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.1-beta1/README.md"
              data-name="2.1.1-beta1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.1-beta1">
                2.1.1-beta1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.0/README.md"
              data-name="2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0">
                2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.0-rc1/README.md"
              data-name="2.1.0-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0-rc1">
                2.1.0-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.0-beta3/README.md"
              data-name="2.1.0-beta3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0-beta3">
                2.1.0-beta3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.0-beta2/README.md"
              data-name="2.1.0-beta2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0-beta2">
                2.1.0-beta2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.1.0-beta1/README.md"
              data-name="2.1.0-beta1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0-beta1">
                2.1.0-beta1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.0.3/README.md"
              data-name="2.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.3">
                2.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.0.2/README.md"
              data-name="2.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.2">
                2.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.0.1/README.md"
              data-name="2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.1">
                2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.0.0/README.md"
              data-name="2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.0.0b2/README.md"
              data-name="2.0.0b2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0b2">
                2.0.0b2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.0.0b1/README.md"
              data-name="2.0.0b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0b1">
                2.0.0b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/2.0.0-beta3/README.md"
              data-name="2.0.0-beta3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0-beta3">
                2.0.0-beta3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.12.3/README.md"
              data-name="1.12.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.12.3">
                1.12.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.12.2/README.md"
              data-name="1.12.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.12.2">
                1.12.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.12.1/README.md"
              data-name="1.12.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.12.1">
                1.12.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.12.0/README.md"
              data-name="1.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.12.0">
                1.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.3/README.md"
              data-name="1.11.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.3">
                1.11.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.2/README.md"
              data-name="1.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.2">
                1.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.1/README.md"
              data-name="1.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.1">
                1.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.1-rc2/README.md"
              data-name="1.11.1-rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.1-rc2">
                1.11.1-rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.1-rc1/README.md"
              data-name="1.11.1-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.1-rc1">
                1.11.1-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.1-beta1/README.md"
              data-name="1.11.1-beta1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.1-beta1">
                1.11.1-beta1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.0/README.md"
              data-name="1.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.0">
                1.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.0-rc1/README.md"
              data-name="1.11.0-rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.0-rc1">
                1.11.0-rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.0-beta3/README.md"
              data-name="1.11.0-beta3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.0-beta3">
                1.11.0-beta3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.0-beta2/README.md"
              data-name="1.11.0-beta2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.0-beta2">
                1.11.0-beta2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.11.0-beta1/README.md"
              data-name="1.11.0-beta1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.11.0-beta1">
                1.11.0-beta1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.10.2/README.md"
              data-name="1.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.10.2">
                1.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.10.1/README.md"
              data-name="1.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.10.1">
                1.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.10.0/README.md"
              data-name="1.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.10.0">
                1.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.10.0-beta1/README.md"
              data-name="1.10.0-beta1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.10.0-beta1">
                1.10.0-beta1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.9.1/README.md"
              data-name="1.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.9.1">
                1.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.9.0/README.md"
              data-name="1.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.9.0">
                1.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.9.0rc1/README.md"
              data-name="1.9.0rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.9.0rc1">
                1.9.0rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.9.0b1/README.md"
              data-name="1.9.0b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.9.0b1">
                1.9.0b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8.3+1/README.md"
              data-name="1.8.3+1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.3+1">
                1.8.3+1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8.3/README.md"
              data-name="1.8.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.3">
                1.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8.2/README.md"
              data-name="1.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.2">
                1.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8.1/README.md"
              data-name="1.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.1">
                1.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8.0/README.md"
              data-name="1.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8.0">
                1.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8rc1/README.md"
              data-name="1.8rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8rc1">
                1.8rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8b2/README.md"
              data-name="1.8b2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8b2">
                1.8b2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.8b1/README.md"
              data-name="1.8b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.8b1">
                1.8b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7.2/README.md"
              data-name="1.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.2">
                1.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7.2rc1/README.md"
              data-name="1.7.2rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.2rc1">
                1.7.2rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7.2b1/README.md"
              data-name="1.7.2b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.2b1">
                1.7.2b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7.1/README.md"
              data-name="1.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.1">
                1.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7.1rc1/README.md"
              data-name="1.7.1rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.1rc1">
                1.7.1rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7.0/README.md"
              data-name="1.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7.0">
                1.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7/README.md"
              data-name="1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7">
                1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7rc2/README.md"
              data-name="1.7rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7rc2">
                1.7rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7rc1/README.md"
              data-name="1.7rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7rc1">
                1.7rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7b2/README.md"
              data-name="1.7b2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7b2">
                1.7b2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.7b1/README.md"
              data-name="1.7b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.7b1">
                1.7b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.4/README.md"
              data-name="1.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.4">
                1.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.4rc1/README.md"
              data-name="1.6.4rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.4rc1">
                1.6.4rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.3/README.md"
              data-name="1.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.3">
                1.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.3rc1/README.md"
              data-name="1.6.3rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.3rc1">
                1.6.3rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.2/README.md"
              data-name="1.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.2">
                1.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.2rc1/README.md"
              data-name="1.6.2rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.2rc1">
                1.6.2rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.1/README.md"
              data-name="1.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.1">
                1.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.1rc1/README.md"
              data-name="1.6.1rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.1rc1">
                1.6.1rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6.0/README.md"
              data-name="1.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6.0">
                1.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6/README.md"
              data-name="1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6">
                1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6rc1/README.md"
              data-name="1.6rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6rc1">
                1.6rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.6b1/README.md"
              data-name="1.6b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.6b1">
                1.6b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5.2/README.md"
              data-name="1.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.2">
                1.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5.2rc1/README.md"
              data-name="1.5.2rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.2rc1">
                1.5.2rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5.1/README.md"
              data-name="1.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.1">
                1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5.1rc1/README.md"
              data-name="1.5.1rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.1rc1">
                1.5.1rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5.0/README.md"
              data-name="1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5.0">
                1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5/README.md"
              data-name="1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5">
                1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5rc1/README.md"
              data-name="1.5rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5rc1">
                1.5rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.5b1/README.md"
              data-name="1.5b1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.5b1">
                1.5b1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.4/README.md"
              data-name="1.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.4">
                1.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.4rc3/README.md"
              data-name="1.4.4rc3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.4rc3">
                1.4.4rc3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.4rc2/README.md"
              data-name="1.4.4rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.4rc2">
                1.4.4rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.4rc1/README.md"
              data-name="1.4.4rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.4rc1">
                1.4.4rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.3/README.md"
              data-name="1.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.3">
                1.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.3rc2/README.md"
              data-name="1.4.3rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.3rc2">
                1.4.3rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.3rc1/README.md"
              data-name="1.4.3rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.3rc1">
                1.4.3rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.2/README.md"
              data-name="1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.2">
                1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.1/README.md"
              data-name="1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.1">
                1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4.0/README.md"
              data-name="1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4.0">
                1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4/README.md"
              data-name="1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4">
                1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/jquery/jquery/tree/1.4rc1/README.md"
              data-name="1.4rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.4rc1">
                1.4rc1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/jquery/jquery/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/jquery/jquery"><span>jquery</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/jquery/jquery/commit/e5ffcb0838c894e26f4ff32dfec162cf624d8d7d" data-pjax>
          e5ffcb0
        </a>
        <time datetime="2016-04-11T17:32:51Z" is="relative-time">Apr 11, 2016</time>
      </span>
      <div>
        <img alt="@dmethvin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/157858?v=3&amp;s=40" width="20" />
        <a href="/dmethvin" class="user-mention" rel="contributor">dmethvin</a>
          <a href="/jquery/jquery/commit/e5ffcb0838c894e26f4ff32dfec162cf624d8d7d" class="message" data-pjax="true" title="Tests: Refactor testIframe() to make it DRYer and more consistent

Ref gh-3040
Closes gh-3049">Tests: Refactor testIframe() to make it DRYer and more consistent</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>24</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="dmethvin" href="/jquery/jquery/commits/master/README.md?author=dmethvin"><img alt="@dmethvin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/157858?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rwaldron" href="/jquery/jquery/commits/master/README.md?author=rwaldron"><img alt="@rwaldron" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/27985?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="timmywil" href="/jquery/jquery/commits/master/README.md?author=timmywil"><img alt="@timmywil" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/192451?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mgol" href="/jquery/jquery/commits/master/README.md?author=mgol"><img alt="@mgol" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1758366?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="markelog" href="/jquery/jquery/commits/master/README.md?author=markelog"><img alt="@markelog" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/945528?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jeresig" href="/jquery/jquery/commits/master/README.md?author=jeresig"><img alt="@jeresig" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1615?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mathiasbynens" href="/jquery/jquery/commits/master/README.md?author=mathiasbynens"><img alt="@mathiasbynens" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/81942?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dcneiner" href="/jquery/jquery/commits/master/README.md?author=dcneiner"><img alt="@dcneiner" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/106974?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mikesherov" href="/jquery/jquery/commits/master/README.md?author=mikesherov"><img alt="@mikesherov" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/364532?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="robmorgan" href="/jquery/jquery/commits/master/README.md?author=robmorgan"><img alt="@robmorgan" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/178939?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="csnover" href="/jquery/jquery/commits/master/README.md?author=csnover"><img alt="@csnover" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/229244?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="xavierm02" href="/jquery/jquery/commits/master/README.md?author=xavierm02"><img alt="@xavierm02" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/364461?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="leobalter" href="/jquery/jquery/commits/master/README.md?author=leobalter"><img alt="@leobalter" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/301201?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ksieburg" href="/jquery/jquery/commits/master/README.md?author=ksieburg"><img alt="@ksieburg" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3649593?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kborchers" href="/jquery/jquery/commits/master/README.md?author=kborchers"><img alt="@kborchers" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/282468?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jdufresne" href="/jquery/jquery/commits/master/README.md?author=jdufresne"><img alt="@jdufresne" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/347634?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="RedWolves" href="/jquery/jquery/commits/master/README.md?author=RedWolves"><img alt="@RedWolves" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/129322?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tomfuertes" href="/jquery/jquery/commits/master/README.md?author=tomfuertes"><img alt="@tomfuertes" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1503991?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="garysye" href="/jquery/jquery/commits/master/README.md?author=garysye"><img alt="@garysye" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/8218686?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tricknotes" href="/jquery/jquery/commits/master/README.md?author=tricknotes"><img alt="@tricknotes" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/290782?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="datag" href="/jquery/jquery/commits/master/README.md?author=datag"><img alt="@datag" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/149835?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joyvuu-dave" href="/jquery/jquery/commits/master/README.md?author=joyvuu-dave"><img alt="@joyvuu-dave" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/68452?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="upisfree" href="/jquery/jquery/commits/master/README.md?author=upisfree"><img alt="@upisfree" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2557494?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="azatoth" href="/jquery/jquery/commits/master/README.md?author=azatoth"><img alt="@azatoth" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/146477?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@dmethvin" height="24" src="https://avatars3.githubusercontent.com/u/157858?v=3&amp;s=48" width="24" />
            <a href="/dmethvin">dmethvin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rwaldron" height="24" src="https://avatars1.githubusercontent.com/u/27985?v=3&amp;s=48" width="24" />
            <a href="/rwaldron">rwaldron</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@timmywil" height="24" src="https://avatars2.githubusercontent.com/u/192451?v=3&amp;s=48" width="24" />
            <a href="/timmywil">timmywil</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mgol" height="24" src="https://avatars2.githubusercontent.com/u/1758366?v=3&amp;s=48" width="24" />
            <a href="/mgol">mgol</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@markelog" height="24" src="https://avatars0.githubusercontent.com/u/945528?v=3&amp;s=48" width="24" />
            <a href="/markelog">markelog</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jeresig" height="24" src="https://avatars0.githubusercontent.com/u/1615?v=3&amp;s=48" width="24" />
            <a href="/jeresig">jeresig</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mathiasbynens" height="24" src="https://avatars1.githubusercontent.com/u/81942?v=3&amp;s=48" width="24" />
            <a href="/mathiasbynens">mathiasbynens</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dcneiner" height="24" src="https://avatars3.githubusercontent.com/u/106974?v=3&amp;s=48" width="24" />
            <a href="/dcneiner">dcneiner</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mikesherov" height="24" src="https://avatars3.githubusercontent.com/u/364532?v=3&amp;s=48" width="24" />
            <a href="/mikesherov">mikesherov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@robmorgan" height="24" src="https://avatars1.githubusercontent.com/u/178939?v=3&amp;s=48" width="24" />
            <a href="/robmorgan">robmorgan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@csnover" height="24" src="https://avatars1.githubusercontent.com/u/229244?v=3&amp;s=48" width="24" />
            <a href="/csnover">csnover</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@xavierm02" height="24" src="https://avatars1.githubusercontent.com/u/364461?v=3&amp;s=48" width="24" />
            <a href="/xavierm02">xavierm02</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@leobalter" height="24" src="https://avatars3.githubusercontent.com/u/301201?v=3&amp;s=48" width="24" />
            <a href="/leobalter">leobalter</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ksieburg" height="24" src="https://avatars0.githubusercontent.com/u/3649593?v=3&amp;s=48" width="24" />
            <a href="/ksieburg">ksieburg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kborchers" height="24" src="https://avatars2.githubusercontent.com/u/282468?v=3&amp;s=48" width="24" />
            <a href="/kborchers">kborchers</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jdufresne" height="24" src="https://avatars3.githubusercontent.com/u/347634?v=3&amp;s=48" width="24" />
            <a href="/jdufresne">jdufresne</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@RedWolves" height="24" src="https://avatars3.githubusercontent.com/u/129322?v=3&amp;s=48" width="24" />
            <a href="/RedWolves">RedWolves</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tomfuertes" height="24" src="https://avatars3.githubusercontent.com/u/1503991?v=3&amp;s=48" width="24" />
            <a href="/tomfuertes">tomfuertes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@garysye" height="24" src="https://avatars2.githubusercontent.com/u/8218686?v=3&amp;s=48" width="24" />
            <a href="/garysye">garysye</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tricknotes" height="24" src="https://avatars0.githubusercontent.com/u/290782?v=3&amp;s=48" width="24" />
            <a href="/tricknotes">tricknotes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@datag" height="24" src="https://avatars2.githubusercontent.com/u/149835?v=3&amp;s=48" width="24" />
            <a href="/datag">datag</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@joyvuu-dave" height="24" src="https://avatars3.githubusercontent.com/u/68452?v=3&amp;s=48" width="24" />
            <a href="/joyvuu-dave">joyvuu-dave</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@upisfree" height="24" src="https://avatars0.githubusercontent.com/u/2557494?v=3&amp;s=48" width="24" />
            <a href="/upisfree">upisfree</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@azatoth" height="24" src="https://avatars1.githubusercontent.com/u/146477?v=3&amp;s=48" width="24" />
            <a href="/azatoth">azatoth</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/jquery/jquery/raw/master/README.md" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/jquery/jquery/blame/master/README.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/jquery/jquery/commits/master/README.md" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
        </button>
  </div>

  <div class="file-info">
      376 lines (252 sloc)
      <span class="file-info-divider"></span>
    12.8 KB
  </div>
</div>

  
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-jquery--new-wave-javascript" class="anchor" href="#jquery--new-wave-javascript" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><a href="https://jquery.com/">jQuery</a> — New Wave JavaScript</h1>

<h2><a id="user-content-contribution-guides" class="anchor" href="#contribution-guides" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Contribution Guides</h2>

<p>In the spirit of open source software development, jQuery always encourages community code contribution. To help you get started and before you jump into writing code, be sure to read these important contribution guidelines thoroughly:</p>

<ol>
<li><a href="https://contribute.jquery.org/">Getting Involved</a></li>
<li><a href="https://contribute.jquery.org/style-guide/js/">Core Style Guide</a></li>
<li><a href="https://contribute.jquery.org/code/">Writing Code for jQuery Foundation Projects</a></li>
</ol>

<h2><a id="user-content-environments-in-which-to-use-jquery" class="anchor" href="#environments-in-which-to-use-jquery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Environments in which to use jQuery</h2>

<ul>
<li><a href="https://jquery.com/browser-support/">Browser support</a></li>
<li>jQuery also supports Node, browser extensions, and other non-browser environments.</li>
</ul>

<h2><a id="user-content-what-you-need-to-build-your-own-jquery" class="anchor" href="#what-you-need-to-build-your-own-jquery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>What you need to build your own jQuery</h2>

<p>In order to build jQuery, you need to have the latest Node.js/npm and git 1.7 or later. Earlier versions might work, but are not supported.</p>

<p>For Windows, you have to download and install <a href="https://git-scm.com/downloads">git</a> and <a href="https://nodejs.org/en/download/">Node.js</a>.</p>

<p>OS X users should install <a href="http://brew.sh/">Homebrew</a>. Once Homebrew is installed, run <code>brew install git</code> to install git,
and <code>brew install node</code> to install Node.js.</p>

<p>Linux/BSD users should use their appropriate package managers to install git and Node.js, or build from source
if you swing that way. Easy-peasy.</p>

<h2><a id="user-content-how-to-build-your-own-jquery" class="anchor" href="#how-to-build-your-own-jquery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>How to build your own jQuery</h2>

<p>Clone a copy of the main jQuery git repo by running:</p>

<div class="highlight highlight-source-shell"><pre>git clone git://github.com/jquery/jquery.git</pre></div>

<p>Enter the jquery directory and run the build script:</p>

<div class="highlight highlight-source-shell"><pre><span class="pl-c1">cd</span> jquery <span class="pl-k">&amp;&amp;</span> npm run build</pre></div>

<p>The built version of jQuery will be put in the <code>dist/</code> subdirectory, along with the minified copy and associated map file.</p>

<p>If you want to create custom build or help with jQuery development, it would be better to install <a href="https://github.com/gruntjs/grunt-cli">grunt command line interface</a> as a global package:</p>

<pre><code>npm install -g grunt-cli
</code></pre>

<p>Make sure you have <code>grunt</code> installed by testing:</p>

<pre><code>grunt -V
</code></pre>

<p>Now by running the <code>grunt</code> command, in the jquery directory, you can build a full version of jQuery, just like with an <code>npm run build</code> command:</p>

<pre><code>grunt
</code></pre>

<p>There are many other tasks available for jQuery Core:</p>

<pre><code>grunt -help
</code></pre>

<h3><a id="user-content-modules" class="anchor" href="#modules" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Modules</h3>

<p>Special builds can be created that exclude subsets of jQuery functionality.
This allows for smaller custom builds when the builder is certain that those parts of jQuery are not being used.
For example, an app that only used JSONP for <code>$.ajax()</code> and did not need to calculate offsets or positions of elements could exclude the offset and ajax/xhr modules.</p>

<p>Any module may be excluded except for <code>core</code>, and <code>selector</code>. To exclude a module, pass its path relative to the <code>src</code> folder (without the <code>.js</code> extension).</p>

<p>Some example modules that can be excluded are:</p>

<ul>
<li><strong>ajax</strong>: All AJAX functionality: <code>$.ajax()</code>, <code>$.get()</code>, <code>$.post()</code>, <code>$.ajaxSetup()</code>, <code>.load()</code>, transports, and ajax event shorthands such as <code>.ajaxStart()</code>.</li>
<li><strong>ajax/xhr</strong>: The XMLHTTPRequest AJAX transport only.</li>
<li><strong>ajax/script</strong>: The <code>&lt;script&gt;</code> AJAX transport only; used to retrieve scripts.</li>
<li><strong>ajax/jsonp</strong>: The JSONP AJAX transport only; depends on the ajax/script transport.</li>
<li><strong>css</strong>: The <code>.css()</code> method. Also removes <strong>all</strong> modules depending on css (including <strong>effects</strong>, <strong>dimensions</strong>, and <strong>offset</strong>).</li>
<li><strong>css/showHide</strong>:  Non-animated <code>.show()</code>, <code>.hide()</code> and <code>.toggle()</code>; can be excluded if you use classes or explicit <code>.css()</code> calls to set the <code>display</code> property. Also removes the <strong>effects</strong> module.</li>
<li><strong>deprecated</strong>: Methods documented as deprecated but not yet removed.</li>
<li><strong>dimensions</strong>: The <code>.width()</code> and <code>.height()</code> methods, including <code>inner-</code> and <code>outer-</code> variations.</li>
<li><strong>effects</strong>: The <code>.animate()</code> method and its shorthands such as <code>.slideUp()</code> or <code>.hide("slow")</code>.</li>
<li><strong>event</strong>: The <code>.on()</code> and <code>.off()</code> methods and all event functionality. Also removes <code>event/alias</code>.</li>
<li><strong>event/alias</strong>: All event attaching/triggering shorthands like <code>.click()</code> or <code>.mouseover()</code>.</li>
<li><strong>event/focusin</strong>: Cross-browser support for the focusin and focusout events.</li>
<li><strong>event/trigger</strong>: The <code>.trigger()</code> and <code>.triggerHandler()</code> methods. Used by <strong>alias</strong> and <strong>focusin</strong> modules.</li>
<li><strong>offset</strong>: The <code>.offset()</code>, <code>.position()</code>, <code>.offsetParent()</code>, <code>.scrollLeft()</code>, and <code>.scrollTop()</code> methods.</li>
<li><strong>wrap</strong>: The <code>.wrap()</code>, <code>.wrapAll()</code>, <code>.wrapInner()</code>, and <code>.unwrap()</code> methods.</li>
<li><strong>core/ready</strong>: Exclude the ready module if you place your scripts at the end of the body. Any ready callbacks bound with <code>jQuery()</code> will simply be called immediately. However, <code>jQuery(document).ready()</code> will not be a function and <code>.on("ready", ...)</code> or similar will not be triggered.</li>
<li><strong>deferred</strong>: Exclude jQuery.Deferred. This also removes jQuery.Callbacks. <em>Note</em> that modules that depend on jQuery.Deferred(AJAX, effects, core/ready) will not be removed and will still expect jQuery.Deferred to be there. Include your own jQuery.Deferred implementation or exclude those modules as well (<code>grunt custom:-deferred,-ajax,-effects,-core/ready</code>).</li>
<li><strong>exports/global</strong>: Exclude the attachment of global jQuery variables ($ and jQuery) to the window.</li>
<li><strong>exports/amd</strong>: Exclude the AMD definition.</li>
</ul>

<p>As a special case, you may also replace Sizzle by using a special flag <code>grunt custom:-sizzle</code>.</p>

<ul>
<li><strong>sizzle</strong>: The Sizzle selector engine. When this module is excluded, it is replaced by a rudimentary selector engine based on the browser's <code>querySelectorAll</code> method that does not support jQuery selector extensions or enhanced semantics. See the <a href="https://github.com/jquery/jquery/blob/master/src/selector-native.js">selector-native.js</a> file for details.</li>
</ul>

<p><em>Note</em>: Excluding Sizzle will also exclude all jQuery selector extensions (such as <code>effects/animatedSelector</code> and <code>css/hiddenVisibleSelectors</code>).</p>

<p>The build process shows a message for each dependent module it excludes or includes.</p>

<h5><a id="user-content-amd-name" class="anchor" href="#amd-name" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>AMD name</h5>

<p>As an option, you can set the module name for jQuery's AMD definition. By default, it is set to "jquery", which plays nicely with plugins and third-party libraries, but there may be cases where you'd like to change this. Simply set the <code>"amd"</code> option:</p>

<div class="highlight highlight-source-shell"><pre>grunt custom --amd=<span class="pl-s"><span class="pl-pds">"</span>custom-name<span class="pl-pds">"</span></span></pre></div>

<p>Or, to define anonymously, set the name to an empty string.</p>

<div class="highlight highlight-source-shell"><pre>grunt custom --amd=<span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span></pre></div>

<h4><a id="user-content-custom-build-examples" class="anchor" href="#custom-build-examples" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Custom Build Examples</h4>

<p>To create a custom build, first check out the version:</p>

<div class="highlight highlight-source-shell"><pre>git pull<span class="pl-k">;</span> git checkout VERSION</pre></div>

<p>Where VERSION is the version you want to customize. Then, make sure all Node dependencies are installed:</p>

<div class="highlight highlight-source-shell"><pre>npm install</pre></div>

<p>Create the custom build using the <code>grunt custom</code> option, listing the modules to be excluded.</p>

<p>Exclude all <strong>ajax</strong> functionality:</p>

<div class="highlight highlight-source-shell"><pre>grunt custom:-ajax</pre></div>

<p>Excluding <strong>css</strong> removes modules depending on CSS: <strong>effects</strong>, <strong>offset</strong>, <strong>dimensions</strong>.</p>

<div class="highlight highlight-source-shell"><pre>grunt custom:-css</pre></div>

<p>Exclude a bunch of modules:</p>

<div class="highlight highlight-source-shell"><pre>grunt custom:-ajax,-css,-deprecated,-dimensions,-effects,-event/alias,-offset,-wrap</pre></div>

<p>For questions or requests regarding custom builds, please start a thread on the <a href="https://forum.jquery.com/developing-jquery-core">Developing jQuery Core</a> section of the forum. Due to the combinatorics and custom nature of these builds, they are not regularly tested in jQuery's unit test process. The non-Sizzle selector engine currently does not pass unit tests because it is missing too much essential functionality.</p>

<h2><a id="user-content-running-the-unit-tests" class="anchor" href="#running-the-unit-tests" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Running the Unit Tests</h2>

<p>Make sure you have the necessary dependencies:</p>

<div class="highlight highlight-source-shell"><pre>npm install</pre></div>

<p>Start <code>grunt watch</code> or <code>npm start</code> to auto-build jQuery as you work:</p>

<div class="highlight highlight-source-shell"><pre>grunt watch</pre></div>

<p>Run the unit tests with a local server that supports PHP. Ensure that you run the site from the root directory, not the "test" directory. No database is required. Pre-configured php local servers are available for Windows and Mac. Here are some options:</p>

<ul>
<li>Windows: <a href="http://www.wampserver.com/en/">WAMP download</a></li>
<li>Mac: <a href="https://www.mamp.info/en/downloads/">MAMP download</a></li>
<li>Linux: <a href="https://www.linux.com/learn/tutorials/288158-easy-lamp-server-installation">Setting up LAMP</a></li>
<li><a href="https://code.google.com/p/mongoose/">Mongoose (most platforms)</a></li>
</ul>

<h2><a id="user-content-building-to-a-different-directory" class="anchor" href="#building-to-a-different-directory" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Building to a different directory</h2>

<p>To copy the built jQuery files from <code>/dist</code> to another directory:</p>

<div class="highlight highlight-source-shell"><pre>grunt <span class="pl-k">&amp;&amp;</span> grunt dist:/path/to/special/location/</pre></div>

<p>With this example, the output files would be:</p>

<div class="highlight highlight-source-shell"><pre>/path/to/special/location/jquery.js
/path/to/special/location/jquery.min.js</pre></div>

<p>To add a permanent copy destination, create a file in <code>dist/</code> called ".destination.json". Inside the file, paste and customize the following:</p>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>/Absolute/path/to/other/destination<span class="pl-pds">"</span></span>: <span class="pl-c1">true</span>
}</pre></div>

<p>Additionally, both methods can be combined.</p>

<h2><a id="user-content-essential-git" class="anchor" href="#essential-git" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Essential Git</h2>

<p>As the source code is handled by the Git version control system, it's useful to know some features used.</p>

<h3><a id="user-content-cleaning" class="anchor" href="#cleaning" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Cleaning</h3>

<p>If you want to purge your working directory back to the status of upstream, the following commands can be used (remember everything you've worked on is gone after these):</p>

<div class="highlight highlight-source-shell"><pre>git reset --hard upstream/master
git clean -fdx</pre></div>

<h3><a id="user-content-rebasing" class="anchor" href="#rebasing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Rebasing</h3>

<p>For feature/topic branches, you should always use the <code>--rebase</code> flag to <code>git pull</code>, or if you are usually handling many temporary "to be in a github pull request" branches, run the following to automate this:</p>

<div class="highlight highlight-source-shell"><pre>git config branch.autosetuprebase <span class="pl-k">local</span></pre></div>

<p>(see <code>man git-config</code> for more information)</p>

<h3><a id="user-content-handling-merge-conflicts" class="anchor" href="#handling-merge-conflicts" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Handling merge conflicts</h3>

<p>If you're getting merge conflicts when merging, instead of editing the conflicted files manually, you can use the feature
<code>git mergetool</code>. Even though the default tool <code>xxdiff</code> looks awful/old, it's rather useful.</p>

<p>The following are some commands that can be used there:</p>

<ul>
<li><code>Ctrl + Alt + M</code> - automerge as much as possible</li>
<li><code>b</code> - jump to next merge conflict</li>
<li><code>s</code> - change the order of the conflicted lines</li>
<li><code>u</code> - undo a merge</li>
<li><code>left mouse button</code> - mark a block to be the winner</li>
<li><code>middle mouse button</code> - mark a line to be the winner</li>
<li><code>Ctrl + S</code> - save</li>
<li><code>Ctrl + Q</code> - quit</li>
</ul>

<h2><a id="user-content-qunit-reference" class="anchor" href="#qunit-reference" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a><a href="https://api.qunitjs.com">QUnit</a> Reference</h2>

<h3><a id="user-content-test-methods" class="anchor" href="#test-methods" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Test methods</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">expect</span>( numAssertions );
<span class="pl-en">stop</span>();
<span class="pl-en">start</span>();</pre></div>

<p><em>Note</em>: QUnit's eventual addition of an argument to stop/start is ignored in this test suite so that start and stop can be passed as callbacks without worrying about their parameters.</p>

<h3><a id="user-content-test-assertions" class="anchor" href="#test-assertions" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Test assertions</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">ok</span>( value, [message] );
<span class="pl-en">equal</span>( actual, expected, [message] );
<span class="pl-en">notEqual</span>( actual, expected, [message] );
<span class="pl-en">deepEqual</span>( actual, expected, [message] );
<span class="pl-en">notDeepEqual</span>( actual, expected, [message] );
<span class="pl-en">strictEqual</span>( actual, expected, [message] );
<span class="pl-en">notStrictEqual</span>( actual, expected, [message] );
<span class="pl-en">throws</span>( block, [expected], [message] );</pre></div>

<h2><a id="user-content-test-suite-convenience-methods-reference-see-testdatatestinitjs" class="anchor" href="#test-suite-convenience-methods-reference-see-testdatatestinitjs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Test Suite Convenience Methods Reference (See <a href="https://github.com/jquery/jquery/blob/master/test/data/testinit.js">test/data/testinit.js</a>)</h2>

<h3><a id="user-content-returns-an-array-of-elements-with-the-given-ids" class="anchor" href="#returns-an-array-of-elements-with-the-given-ids" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Returns an array of elements with the given IDs</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">q</span>( <span class="pl-k">...</span> );</pre></div>

<p>Example:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">q</span>(<span class="pl-s"><span class="pl-pds">"</span>main<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>);

<span class="pl-k">=&gt;</span> [ div#main, span#foo, input#bar ]</pre></div>

<h3><a id="user-content-asserts-that-a-selection-matches-the-given-ids" class="anchor" href="#asserts-that-a-selection-matches-the-given-ids" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Asserts that a selection matches the given IDs</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">t</span>( testName, selector, [ <span class="pl-s"><span class="pl-pds">"</span>array<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>of<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>ids<span class="pl-pds">"</span></span> ] );</pre></div>

<p>Example:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">t</span>(<span class="pl-s"><span class="pl-pds">"</span>Check for something<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>//[a]<span class="pl-pds">"</span></span>, [<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>]);</pre></div>

<h3><a id="user-content-fires-a-native-dom-event-without-going-through-jquery" class="anchor" href="#fires-a-native-dom-event-without-going-through-jquery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Fires a native DOM event without going through jQuery</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">fireNative</span>( node, eventType )</pre></div>

<p>Example:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">fireNative</span>( <span class="pl-en">jQuery</span>(<span class="pl-s"><span class="pl-pds">"</span>#elem<span class="pl-pds">"</span></span>)[<span class="pl-c1">0</span>], <span class="pl-s"><span class="pl-pds">"</span>click<span class="pl-pds">"</span></span> );</pre></div>

<h3><a id="user-content-add-random-number-to-url-to-stop-caching" class="anchor" href="#add-random-number-to-url-to-stop-caching" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Add random number to url to stop caching</h3>

<div class="highlight highlight-source-js"><pre><span class="pl-en">url</span>( <span class="pl-s"><span class="pl-pds">"</span>some/url.php<span class="pl-pds">"</span></span> );</pre></div>

<p>Example:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">url</span>(<span class="pl-s"><span class="pl-pds">"</span>data/test.html<span class="pl-pds">"</span></span>);

<span class="pl-k">=&gt;</span> <span class="pl-s"><span class="pl-pds">"</span>data/test.html?10538358428943<span class="pl-pds">"</span></span>


<span class="pl-en">url</span>(<span class="pl-s"><span class="pl-pds">"</span>data/test.php?foo=bar<span class="pl-pds">"</span></span>);

<span class="pl-k">=&gt;</span> <span class="pl-s"><span class="pl-pds">"</span>data/test.php?foo=bar&amp;10538358345554<span class="pl-pds">"</span></span></pre></div>

<h3><a id="user-content-run-tests-in-an-iframe" class="anchor" href="#run-tests-in-an-iframe" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Run tests in an iframe</h3>

<p>Some tests may require a document other than the standard test fixture, and
these can be run in a separate iframe. The actual test code and assertions
remain in jQuery's main test files; only the minimal test fixture markup
and setup code should be placed in the iframe file.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-en">testIframe</span>( testName, fileName,
  <span class="pl-k">function</span> <span class="pl-en">testCallback</span>(
      <span class="pl-smi">assert</span>, <span class="pl-smi">jQuery</span>, <span class="pl-c1">window</span>, <span class="pl-c1">document</span>,
      [ <span class="pl-smi">additional</span> <span class="pl-smi">args</span> ] ) {
    <span class="pl-k">...</span>
  } );</pre></div>

<p>This loads a page, constructing a url with fileName <code>"./data/" + fileName</code>.
The iframed page determines when the callback occurs in the test by
including the "/test/data/iframeTest.js" script and calling
<code>startIframeTest( [ additional args ] )</code> when appropriate. Often this
will be after either document ready or <code>window.onload</code> fires.</p>

<p>The <code>testCallback</code> receives the QUnit <code>assert</code> object created by <code>testIframe</code>
for this test, followed by the global <code>jQuery</code>, <code>window</code>, and <code>document</code> from
the iframe. If the iframe code passes any arguments to <code>startIframeTest</code>,
they follow the <code>document</code> argument.</p>

<h2><a id="user-content-questions" class="anchor" href="#questions" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Questions?</h2>

<p>If you have any questions, please feel free to ask on the
<a href="https://forum.jquery.com/developing-jquery-core">Developing jQuery Core forum</a> or in #jquery on irc.freenode.net.</p>
</article>
  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.05218s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-7db58f8b7b91111107fac755dd8b178fe7db0f209ced51fc339c446ad3f8da2b.js"></script>
      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-3f02f299662c25f8ec0c230795ce959200de70fc6d39ba2f014f660f89f6301a.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-b34f54eabccd0ffa90e322cffdb0db239d492b9a986092f1aa602c5cf84d36b4.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

