import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import useSubsets from '../helperFunctions/useSubsets';
import getBestPodcast from '../helperFunctions/getBestPodcast';

const data = {
  id: 93,
  name: 'Business',
  total: 712,
  has_next: true,
  podcasts: [
    {
      id: '0d362b13399240de97602ef614acdcbc',
      rss: 'https://feeds.megaphone.fm/startup',
      type: 'episodic',
      email: 'admin@gimletmedia.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://play.google.com/music/m/Ihs2lujac7unjyp2u7hp6ale7hq?t=StartUp_Podcast',
        spotify_url: 'https://open.spotify.com/show/5CnDmMUG0S5bSSw612fs8C',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'podcaststartup',
        facebook_handle: 'hearstartup',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/startup-podcast-gimlet-14zU0c_MOmv-n9PpCBTQvoJ.1400x1400.jpg',
      title: 'StartUp Podcast',
      country: 'United States',
      website:
        'https://www.gimletmedia.com/startup?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [93, 171, 127, 68, 97, 94, 157],
      itunes_id: 913805339,
      publisher: 'Gimlet',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/startup-podcast-gimlet-8If7QBKU5jb-n9PpCBTQvoJ.300x300.jpg',
      is_claimed: false,
      description: "A series about what it's really like to start a business.",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 76,
      total_episodes: 153,
      listennotes_url:
        'https://www.listennotes.com/c/0d362b13399240de97602ef614acdcbc/',
      audio_length_sec: 2176,
      explicit_content: false,
      latest_episode_id: '3663e1ba8f944df7956378ab332bf12b',
      latest_pub_date_ms: 1598004000000,
      earliest_pub_date_ms: 1396742400151,
      update_frequency_hours: 253,
      listen_score_global_rank: '0.01%',
    },
    {
      id: '34beae8ad8fd4b299196f413b8270a30',
      rss: 'https://feeds.feedburner.com/WorklifeWithAdamGrant',
      type: 'episodic',
      email: 'podcasts@ted.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5mZWVkYnVybmVyLmNvbS9Xb3JrbGlmZVdpdGhBZGFtR3JhbnQ=',
        spotify_url: 'https://open.spotify.com/show/4eylg9GZJOVvUhTynt4jjA',
        youtube_url: '',
        linkedin_url: 'https://www.linkedin.com/in/adammgrant/',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'AdamMGrant',
        facebook_handle: 'AdamMGrant',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/worklife-with-adam-grant-ted-KgaXjFPEoVc.1400x1400.jpg',
      title: 'WorkLife with Adam Grant',
      country: 'United States',
      website:
        'https://www.ted.com/podcasts/worklife?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [93, 111, 97, 67],
      itunes_id: 1346314086,
      publisher: 'TED',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/worklife-with-adam-grant-ted-KgaXjFPEoVc.300x300.jpg',
      is_claimed: false,
      description:
        '\n      <p>You spend a quarter of your life at work. You should enjoy it! Organizational psychologist Adam Grant takes you inside the minds of some of the world’s most unusual professionals to discover the keys to a better work life. From learning how to love your rivals to harnessing the power of frustration, one thing’s for sure: You’ll never see your job the same way again. Produced in partnership with Transmitter Media.</p>\n    ',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 76,
      total_episodes: 75,
      listennotes_url:
        'https://www.listennotes.com/c/34beae8ad8fd4b299196f413b8270a30/',
      audio_length_sec: 2331,
      explicit_content: false,
      latest_episode_id: 'e0ec782e61224c55bb79800ac62781f9',
      latest_pub_date_ms: 1656388800000,
      earliest_pub_date_ms: 1518044524074,
      update_frequency_hours: 167,
      listen_score_global_rank: '0.01%',
    },
    {
      id: 'ee84d7d11875465fb89487675ff5425d',
      rss: 'https://feeds.simplecast.com/J2ZDFXoI',
      type: 'episodic',
      email: 'edwardmylett@yahoo.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9KMlpERlhvSQ==',
        spotify_url: 'https://open.spotify.com/show/19TdDBlFkqh7uevYO0jFSW',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'EdMylett',
        facebook_handle: '',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-ed-mylett-show-ed-mylett-lguQyVETCI8-PEUIT9RBhZD.1400x1400.jpg',
      title: 'THE ED MYLETT SHOW',
      country: 'United States',
      website:
        'https://the-ed-mylett-show.simplecast.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [157, 67, 88, 89, 90, 93],
      itunes_id: 1181233130,
      publisher: 'Ed Mylett',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-ed-mylett-show-ed-mylett-sM8Scyi-YQr-PEUIT9RBhZD.300x300.jpg',
      is_claimed: false,
      description:
        "The Ed Mylett Show showcases the greatest peak-performers across all industries in one place, sharing their journey, knowledge and thought leadership. With Ed Mylett and featured guests in almost every industry including business, health, collegiate and professional sports, politics, entrepreneurship, science, and entertainment, you'll find motivation, inspiration and practical steps to help you become the best version of you!",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 75,
      total_episodes: 246,
      listennotes_url:
        'https://www.listennotes.com/c/ee84d7d11875465fb89487675ff5425d/',
      audio_length_sec: 3075,
      explicit_content: false,
      latest_episode_id: 'e80a2248364f407bb2cd54e667766cee',
      latest_pub_date_ms: 1657015200000,
      earliest_pub_date_ms: 1480363465242,
      update_frequency_hours: 163,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '2184bada602d431689dbb4c6c1bc5839',
      rss: 'https://feeds.simplecast.com/atgtihd0',
      type: 'episodic',
      email: 'interactive@life.church',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9hdGd0aWhkMA==',
        spotify_url: 'https://open.spotify.com/show/7tznexFwtbxfPOYF5mxkxI',
        youtube_url: 'https://www.youtube.com/user/LifeChurchtv',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'lifechurch',
        facebook_handle: 'life.church',
        amazon_music_url: '',
        instagram_handle: 'life.church',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/craig-groeschel-leadership-podcast-lifechurch--_K8zgsM0x1-dy-uJsHC_9T.1400x1400.jpg',
      title: 'Craig Groeschel Leadership Podcast',
      country: 'United States',
      website:
        'https://www.life.church/leadershippodcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [67, 69, 75],
      itunes_id: 1070649025,
      publisher: 'Life.Church',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/craig-groeschel-leadership-podcast-lifechurch-OU5cY0mgjsb-dy-uJsHC_9T.300x300.jpg',
      is_claimed: false,
      description:
        'The Craig Groeschel Leadership Podcast offers personal, practical coaching lessons that take the mystery out of leadership. In each episode of the Craig Groeschel Leadership Podcast, Craig brings you empowering insights and easy-to-understand takeaways you can use to lead yourself and lead your team. You’ll learn effective ways to grow as a leader, optimize your time, develop your team, and structure your organization.',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 74,
      total_episodes: 112,
      listennotes_url:
        'https://www.listennotes.com/c/2184bada602d431689dbb4c6c1bc5839/',
      audio_length_sec: 1659,
      explicit_content: false,
      latest_episode_id: 'b011843cd9544349876bbd4e755bb24f',
      latest_pub_date_ms: 1654164000000,
      earliest_pub_date_ms: 1452675180111,
      update_frequency_hours: 453,
      listen_score_global_rank: '0.05%',
    },
    {
      id: 'fc6d33e22b7f4db38df3bb64a9a8c227',
      rss: 'https://tonyrobbins.libsyn.com/rss',
      type: 'episodic',
      email: 'tonyrobbins.social@gmail.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly90b255cm9iYmlucy5saWJzeW4uY29tL3Jzcw==',
        spotify_url: 'https://open.spotify.com/show/6fZXOzehJ9JtOyFjirF3qt',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'tonyrobbins',
        facebook_handle: 'TonyRobbins',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-tony-robbins-podcast-tony-robbins-eh9wNFJcP1W.1400x1400.jpg',
      title: 'The Tony Robbins Podcast',
      country: 'United States',
      website:
        'http://tonyrobbins.com/podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [90, 93, 181, 157, 78, 67, 97, 111, 144],
      itunes_id: 1098413063,
      publisher: 'Tony Robbins',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-tony-robbins-podcast-tony-robbins-eh9wNFJcP1W.300x300.jpg',
      is_claimed: false,
      description:
        '“Why live an ordinary life, when you can live an extraordinary one?” Tony Robbins, the #1 Life and Business Strategist, has helped over 50 million people from 100 countries create real and lasting change in their lives. In this podcast, he shares proven strategies and tactics so you, too, can achieve massive results in your business, relationships, health and finances. In addition to excerpts from his signature events and other exclusive, never-before-released audio content, Tony and his team also conduct deeply insightful interviews with the most prominent masterminds and experts on the global stage.',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 74,
      total_episodes: 150,
      listennotes_url:
        'https://www.listennotes.com/c/fc6d33e22b7f4db38df3bb64a9a8c227/',
      audio_length_sec: 2706,
      explicit_content: false,
      latest_episode_id: '57b774ac948d414aa7ad692c61f8bb96',
      latest_pub_date_ms: 1655519625000,
      earliest_pub_date_ms: 1459373820099,
      update_frequency_hours: 863,
      listen_score_global_rank: '0.05%',
    },
    {
      id: 'ed79b615ed074204bc4702b56a264a78',
      rss: 'https://thelifecoachschool.libsyn.com/rss',
      type: 'episodic',
      email: 'brooke@thelifecoachschool.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly90aGVsaWZlY29hY2hzY2hvb2wubGlic3luLmNvbS9yc3M=',
        spotify_url: '',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'brookecastillo',
        facebook_handle: '',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-life-coach-school-podcast-brooke-castillo-vKhkd4qFUuw-V5of7JlG_RD.1400x1400.jpg',
      title: 'The Life Coach School Podcast',
      country: 'United States',
      website:
        'http://www.thelifecoachschool.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [67, 88, 90, 93, 94, 111, 115],
      itunes_id: 870239631,
      publisher: 'Brooke Castillo',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-life-coach-school-podcast-brooke-castillo-Yl3ObVSwKEi-V5of7JlG_RD.300x300.jpg',
      is_claimed: false,
      description:
        "The Life Coach School Podcast is your go-to resource for learning, growing, and becoming certified as a Life Coach & Weight Loss Coach. Through this podcast, you'll hear directly from the Master Coach Brooke Castillo to help you better understand life coaching, the required skills and mindsets, and how we focus on serving the client to get them the results they seek.  At The Life Coach School, we offer a thorough and intense certification course that produces some of the most successful coaches coaching today. Learn more at TheLifeCoachSchool.com.",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 74,
      total_episodes: 460,
      listennotes_url:
        'https://www.listennotes.com/c/ed79b615ed074204bc4702b56a264a78/',
      audio_length_sec: 1935,
      explicit_content: false,
      latest_episode_id: 'fdda73c8ebcf4440bf59d7108dd8503c',
      latest_pub_date_ms: 1656579609000,
      earliest_pub_date_ms: 1398606925423,
      update_frequency_hours: 162,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '5f237b79824e4dfb8355f6dff9b1c542',
      rss: 'https://feeds.npr.org/510325/podcast.xml',
      type: 'episodic',
      email: 'podcasts@npr.org',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5ucHIub3JnLzUxMDMyNS9wb2RjYXN0LnhtbA==',
        spotify_url: 'https://open.spotify.com/show/4X3yDKgVTWRjSd6r0vhgo4',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'planetmoney',
        facebook_handle: 'planetmoney',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-indicator-from-planet-money-npr-uFAcdQm6ILr-G2EDjFO-TLA.1400x1400.jpg',
      title: 'The Indicator from Planet Money',
      country: 'United States',
      website:
        'https://www.npr.org/sections/money/567724614/the-indicator?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [67, 93, 171, 99, 144, 98],
      itunes_id: 1320118593,
      publisher: 'NPR',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-indicator-from-planet-money-npr-67Cryeo5VYn-G2EDjFO-TLA.300x300.jpg',
      is_claimed: false,
      description:
        "A little show about big ideas. From the people who make <em>Planet Money</em>, <em>The Indicator</em> helps you make sense of what's happening today. It's a quick hit of insight into work, business, the economy, and everything else. Listen weekday afternoons.<br /><br /><em>Got money on your mind? Try Planet Money+ — a new way to support the show you love, get a sponsor-free feed of the podcast, *and* get access to bonus content. A subscription also gets you access to The Indicator and Planet Money Summer School, both without interruptions. </em>",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 74,
      total_episodes: 1033,
      listennotes_url:
        'https://www.listennotes.com/c/5f237b79824e4dfb8355f6dff9b1c542/',
      audio_length_sec: 576,
      explicit_content: false,
      latest_episode_id: '335d7ec84bec4e018947af3d260cdc0f',
      latest_pub_date_ms: 1656716949000,
      earliest_pub_date_ms: 1527108300299,
      update_frequency_hours: 28,
      listen_score_global_rank: '0.05%',
    },
    {
      id: 'c5ce6c02cbf1486496206829f7d42e8e',
      rss: 'https://feeds.megaphone.fm/marketsnacks-daily',
      type: 'episodic',
      email: 'podcasts@cadence13.com',
      extra: {
        url1: 'http://www.marketsnacks.com/',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vbWFya2V0c25hY2tzLWRhaWx5',
        spotify_url: 'https://open.spotify.com/show/5RllMBgvDnTau8nnsCUdse',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'marketsnacks',
        facebook_handle: 'MarketSnacks',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-Yw2Q5dIpK3A-kmx0XIZTAys.1400x1400.jpg',
      title: 'The Best One Yet',
      country: 'United States',
      website:
        'https://www.instagram.com/tboypod?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [93, 67, 99, 98, 95],
      itunes_id: 1386234384,
      publisher: 'Nick & Jack Studios',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-best-one-yet-nick-jack-studios-KlIFOa-dpRW-kmx0XIZTAys.300x300.jpg',
      is_claimed: false,
      description:
        'The daily pop-biz news show making today’s top stories your business. 15 minutes on the 3 biz stories you need, with fresh takes you can pretend you came up with — Pairs perfectly with your morning oatmeal ritual. Hosted by Jack Crivici-Kramer & Nick Martell.',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 73,
      total_episodes: 773,
      listennotes_url:
        'https://www.listennotes.com/c/c5ce6c02cbf1486496206829f7d42e8e/',
      audio_length_sec: 1058,
      explicit_content: false,
      latest_episode_id: '933f2142f95e49ae91ed4c3f54dc1f86',
      latest_pub_date_ms: 1657011600000,
      earliest_pub_date_ms: 1553519100662,
      update_frequency_hours: 36,
      listen_score_global_rank: '0.05%',
    },
    {
      id: 'd863da7f921e435fb35f512b54e774d6',
      rss: 'https://rss.art19.com/masters-of-scale',
      type: 'episodic',
      email: 'hello@mastersofscale.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://play.google.com/music/m/Ify6fvmlw7taa25qkxdricygohe?t=Masters_of_Scale',
        spotify_url: 'https://open.spotify.com/show/1bJRgaFZHuzifad4IAApFR',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'mastersofscale',
        facebook_handle: 'mastersofscale',
        amazon_music_url: '',
        instagram_handle: 'mastersofscale',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/masters-of-scale-with-reid-hoffman-waitwhat-PJGeHLMmxa6-mYoV0CUyxTD.1400x1400.jpg',
      title: 'Masters of Scale',
      country: 'United States',
      website:
        'http://www.mastersofscale.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [93, 171, 157, 127, 173, 149, 97, 67, 122],
      itunes_id: 1227971746,
      publisher: 'WaitWhat ',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/masters-of-scale-with-reid-hoffman-waitwhat-XJs3WwmUrx7-mYoV0CUyxTD.300x300.jpg',
      is_claimed: false,
      description:
        '\n      <p>Award-winning business advice from Silicon Valley and beyond. Iconic CEOs, from Nike to Netflix, Starbucks to Slack, share the strategies that helped them grow from startups into global brands — and to weather crisis when it strikes. </p><p>Our two formats help tell the complete story of how a business grows, survives and thrives, and the mindsets of growth that keep leaders in the game.</p><p>On each episode of our classic format, host Reid Hoffman — LinkedIn cofounder, Greylock partner and legendary Silicon Valley investor — proves an unconventional theory about how businesses scale, asking his guests to share their stories of entrepreneurship, leadership, strategy, management, fundraising. You’ll hear the human journey too — failures, setbacks, learnings. </p><p>From our Rapid Response format, you can expect real-time wisdom from business leaders in fast-changing situations. Hosted by Bob Safian, past editor in chief of Fast Company, these episodes tackle crisis response, rebuilding, diversity & inclusion, leadership change and much more. </p>\n    ',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 73,
      total_episodes: 305,
      listennotes_url:
        'https://www.listennotes.com/c/d863da7f921e435fb35f512b54e774d6/',
      audio_length_sec: 2066,
      explicit_content: false,
      latest_episode_id: 'f4c374e1d00346f7a5051dffce73eb4e',
      latest_pub_date_ms: 1657011600000,
      earliest_pub_date_ms: 1492543297300,
      update_frequency_hours: 79,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '5590cb1318054bceb942564a4f067eb6',
      rss: 'https://www.marketplace.org/feed/podcast/marketplace',
      type: 'episodic',
      email: 'marketplacecomments@marketplace.org',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cubWFya2V0cGxhY2Uub3JnL2ZlZWQvcG9kY2FzdC9tYXJrZXRwbGFjZQ==',
        spotify_url: 'https://open.spotify.com/show/6zYlX5UGEPmNCWacYUJQGD',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'Marketplace',
        facebook_handle: 'marketplaceapm',
        amazon_music_url: '',
        instagram_handle: 'marketplaceapm',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/marketplace-marketplace-WHc17NQy23S-Jing2WtK5UE.1400x1400.jpg',
      title: 'Marketplace',
      country: 'United States',
      website:
        'https://www.marketplace.org/shows/marketplace/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [173, 99, 93, 67, 95],
      itunes_id: 201853034,
      publisher: 'Marketplace',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/marketplace-marketplace-_YVywHeR0-S-Jing2WtK5UE.300x300.jpg',
      is_claimed: false,
      description:
        '<p>Every weekday, host Kai Ryssdal helps you make sense of the day’s business and economic news — no econ degree or finance background required. “Marketplace” takes you beyond the numbers, bringing you context. Our team of reporters all over the world speak with CEOs, policymakers and regular people just trying to get by.</p>\n',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 73,
      total_episodes: 138,
      listennotes_url:
        'https://www.listennotes.com/c/5590cb1318054bceb942564a4f067eb6/',
      audio_length_sec: 1643,
      explicit_content: false,
      latest_episode_id: 'b1913aa96f294473978ef4f95ebe97e3',
      latest_pub_date_ms: 1656975329000,
      earliest_pub_date_ms: 1640304971049,
      update_frequency_hours: 33,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '73bebcbe52654d1cb94cd1639f736be3',
      rss: 'https://www.omnycontent.com/d/playlist/9b7dacdf-a925-4f95-84dc-ac46003451ff/7029f3ae-fc09-45dd-9e7a-ac5400edbc2f/7cd3d0a4-5749-4d43-9400-ac5400edbc3d/podcast.rss',
      type: 'episodic',
      email: 'info@kastmedia.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvOWI3ZGFjZGYtYTkyNS00Zjk1LTg0ZGMtYWM0NjAwMzQ1MWZmLzcwMjlmM2FlLWZjMDktNDVkZC05ZTdhLWFjNTQwMGVkYmMyZi83Y2QzZDBhNC01NzQ5LTRkNDMtOTQwMC1hYzU0MDBlZGJjM2QvcG9kY2FzdC5yc3M=',
        spotify_url: 'https://open.spotify.com/show/34gFfhLCtfg7GTNo841SuK',
        youtube_url: 'https://www.youtube.com/user/tailopezofficial',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'tailopez',
        facebook_handle: 'TaiLopezOfficial',
        amazon_music_url: '',
        instagram_handle: 'tailopez',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-tai-lopez-show-tai-lopez-509rFHaG-1o-kTnaZBogLC0.1400x1400.jpg',
      title: 'The Tai Lopez Show',
      country: 'United States',
      website:
        'https://art19.com/shows/the-tai-lopez-show?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [111, 97, 88, 93, 90, 157],
      itunes_id: 877968260,
      publisher: 'Kast Media',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-tai-lopez-show-tai-lopez-GYBslgCVEa2-kTnaZBogLC0.300x300.jpg',
      is_claimed: false,
      description:
        "<p>The Tai Lopez podcast brings you the best business education straight from the world's top entrepreneurs. I will also review the best books in health, wealth, love and happiness that will help you achieve your maximum potential and live the best life possible. </p>",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 72,
      total_episodes: 607,
      listennotes_url:
        'https://www.listennotes.com/c/73bebcbe52654d1cb94cd1639f736be3/',
      audio_length_sec: 2028,
      explicit_content: true,
      latest_episode_id: '487b95e4f45e48ff84d2a7080614cad4',
      latest_pub_date_ms: 1656707550000,
      earliest_pub_date_ms: 1400098196605,
      update_frequency_hours: 404,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '499661f3589f42aaa1532673e0e0aedf',
      rss: 'https://rss.art19.com/smart-passive-income-podcast',
      type: 'episodic',
      email: 'podcasts@teamspi.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL3NtYXJ0LXBhc3NpdmUtaW5jb21lLXBvZGNhc3Q=',
        spotify_url: 'https://open.spotify.com/show/7wjv5MRCXWXImqTFhcufLy',
        youtube_url: 'https://www.youtube.com/user/smartpassiveincome',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'patflynn',
        facebook_handle: 'smartpassiveincome',
        amazon_music_url:
          'https://music.amazon.com/podcasts/341282a1-cba9-4188-aa58-e09a51ccaa87/the-smart-passive-income-online-business-and-blogging-podcast',
        instagram_handle: 'patflynn',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-smart-passive-income-online-business-jN-aR6qdYuo-NDa6-ySp9kw.1400x1400.jpg',
      title: 'The Smart Passive Income Online Business and Blogging Podcast',
      country: 'United States',
      website:
        'https://art19.com/shows/smart-passive-income-podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [173, 93, 171, 144, 157, 97, 98, 67, 94, 111, 115, 127],
      itunes_id: 383084001,
      publisher: 'Pat Flynn',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-smart-passive-income-online-business-sF24owQHYWy-NDa6-ySp9kw.300x300.jpg',
      is_claimed: false,
      description:
        "\n      Pat Flynn from The Smart Passive Income Blog reveals all of his online business and blogging strategies, income sources and killer marketing tips and tricks so you can be ahead of the curve with your online business or blog. Discover how you can create multiple passive income streams that work for you so that you can have the time and freedom to do what you love, whether it's traveling the world, or just living comfortably at home. Since 2008, he's been supporting his family with his many online businesses, and he's been openly sharing his wins, his losses, and all the lessons in between with the community of energetic but humble entrepreneurs who follow him. Self-proclaimed \"crash test dummy of online business\", you'll learn about building authority online, email marketing, building a team and outsourcing, content marketing, podcasting, search engine optimization, niche sites, social media strategies, how to get more traffic, creating online courses, affiliate marketing, and productivity tips so that you create something amazing without burning yourself out. It's a mix of interviews, special co-hosts and solo shows from Pat you're not going to want to miss. Hit subscribe, and get ready to change your life.\n    ",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 72,
      total_episodes: 602,
      listennotes_url:
        'https://www.listennotes.com/c/499661f3589f42aaa1532673e0e0aedf/',
      audio_length_sec: 2634,
      explicit_content: false,
      latest_episode_id: '7203d70fc8324bbf969fa0fbeeec41b8',
      latest_pub_date_ms: 1656658800000,
      earliest_pub_date_ms: 1279551600594,
      update_frequency_hours: 83,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '7d730bb2a72e4268b28ee4c52de1915b',
      rss: 'https://anchor.fm/s/12746230/podcast/rss',
      type: 'episodic',
      email: null,
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMjc0NjIzMC9wb2RjYXN0L3Jzcw==',
        spotify_url: 'https://open.spotify.com/show/3iJpUGgGD6WHJHL3fsOSOu',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: '',
        facebook_handle: '',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/call-me-candid-haley-pham-lilly-ann-_dSsBumNY9x-LY-c8VNnzRO.1400x1400.jpg',
      title: 'Call Me Candid',
      country: 'United States',
      website:
        'https://anchor.fm/callmecandid?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [93, 67, 171],
      itunes_id: 1494577260,
      publisher: 'Haley Pham & Lilly Ann',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/call-me-candid-haley-pham-lilly-ann-wbmDUyde8-A-LY-c8VNnzRO.300x300.jpg',
      is_claimed: false,
      description:
        'Two gals chattin about business, advice, and our experiences!',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 33,
      listennotes_url:
        'https://www.listennotes.com/c/7d730bb2a72e4268b28ee4c52de1915b/',
      audio_length_sec: 2683,
      explicit_content: false,
      latest_episode_id: '0c9b9045f27b4a0bbc206807a7f6cc2f',
      latest_pub_date_ms: 1600063200000,
      earliest_pub_date_ms: 1579047805031,
      update_frequency_hours: 167,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '23bd4f3432c2452d93f525e2446a5878',
      rss: 'https://feeds.simplecast.com/4YELvXgu',
      type: 'episodic',
      email: 'rss@earwolf.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS80WUVMdlhndQ==',
        spotify_url: 'https://open.spotify.com/show/0Vdp4gyQoY0kkcvaLnIgvx',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: '',
        facebook_handle: '',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/scam-goddess-earwolf-laci-mosley-pMX-87Jicaq-PstEMgqXCUd.1400x1400.jpg',
      title: 'Scam Goddess',
      country: 'United States',
      website:
        'https://www.earwolf.com/show/scam-goddess/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [135, 67, 133, 93],
      itunes_id: 1479455008,
      publisher: 'Earwolf & Laci Mosley',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/scam-goddess-earwolf-laci-mosley-fy8Bs4RlT06-PstEMgqXCUd.300x300.jpg',
      is_claimed: false,
      description:
        "“Scam Goddess is a podcast dedicated to fraud and all those who practice it! Each week host Laci Mosley (aka Scam Goddess) keeps listeners up to date on current rackets, digs deep into the latest scams, and breaks down historic hoodwinks alongside some of your favorite comedians! It's like true crime only without all the death! True fun crime!”",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 83,
      listennotes_url:
        'https://www.listennotes.com/c/23bd4f3432c2452d93f525e2446a5878/',
      audio_length_sec: 3874,
      explicit_content: true,
      latest_episode_id: 'a0ced9f5732741a58aa7f682c4713154',
      latest_pub_date_ms: 1656993600000,
      earliest_pub_date_ms: 1420099200036,
      update_frequency_hours: 167,
      listen_score_global_rank: '0.05%',
    },
    {
      id: 'fbecfdd4116e4e7a954bd6bc4cb0b406',
      rss: 'https://amyporterfield.libsyn.com/rss',
      type: 'episodic',
      email: 'podcast@amyporterfield.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9hbXlwb3J0ZXJmaWVsZC5saWJzeW4uY29tL3Jzcw==',
        spotify_url: 'https://open.spotify.com/show/5z7TqC6tll8egI9prMqXhd',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'AmyPorterfield',
        facebook_handle: 'AmyPorterfield',
        amazon_music_url: '',
        instagram_handle: 'amyporterfield',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/online-marketing-made-easy-with-amy--Idu4myEQGo-jXUyf4vBV20.1400x1400.jpg',
      title: 'Online Marketing Made Easy with Amy Porterfield',
      country: 'United States',
      website:
        'https://amyporterfield.com/category/podcast/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [173, 93, 157, 94, 97, 67],
      itunes_id: 594703545,
      publisher: 'Amy Porterfield',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/online-marketing-made-easy-with-amy-8ns5W6RkdPl-jXUyf4vBV20.300x300.jpg',
      is_claimed: false,
      description:
        "Ever wish you had a business mentor with over a decade of experience whispering success secrets in your ear? That’s exactly what you’ll get when you tune into the top-ranked Online Marketing Made Easy Podcast with your host, 9 to 5er turned CEO of a multi-million dollar business, Amy Porterfield. Her specialty? Breaking down big ideas and strategies into actionable step-by-step processes designed to get you results with a whole lot less stress. Tune in, get inspired, and get ready to discover why hundreds of thousands of online business owners turn to Amy for guidance when it comes to all things online business including digital courses, list building, social media, content, webinars, and so much more. Whether you're a budding entrepreneur, have a comfy side-hustle, or are looking to take your business to the next level, each episode is designed to help you take immediate action on the most important strategies for starting and growing your online business today.",
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 506,
      listennotes_url:
        'https://www.listennotes.com/c/fbecfdd4116e4e7a954bd6bc4cb0b406/',
      audio_length_sec: 2405,
      explicit_content: false,
      latest_episode_id: '4229186c343d478d9e705b9f1df70a3b',
      latest_pub_date_ms: 1657004460000,
      earliest_pub_date_ms: 1358200867495,
      update_frequency_hours: 81,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '4e272a4cec844b32be6ad2048d614b28',
      rss: 'https://feeds.simplecast.com/mWO0BLec',
      type: 'episodic',
      email: null,
      extra: {
        url1: 'https://bythebookpod.com/',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvYWFlYTRlNjktYWY1MS00OTVlLWFmYzktYTk3NjAxNDY5MjJiLzczZmQ4MGMyLTQ4ZDYtNDMzYy04MTdmLWFhYTQwMTdjM2MxNi8xYzM1Yzk0Ny01NmQyLTQ5Y2MtYmUxNS1hYWE0MDE3YzNjMWUvcG9kY2FzdC5yc3M=',
        spotify_url: 'https://open.spotify.com/show/4uPxHwRyvRC7ebz3gMxpk1',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'bythebookpod',
        facebook_handle: 'kristenandjolenta',
        amazon_music_url: '',
        instagram_handle: 'bythebookpod',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/by-the-book-stitcher-jolenta-greenberg-VJ1gq8zXAma--sCyAljv4BT.1400x1400.jpg',
      title: 'By The Book',
      country: 'United States',
      website:
        'https://www.stitcher.com/podcast/stitcher/by-the-book?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [104, 191, 78, 93, 67, 88, 90, 122, 133],
      itunes_id: 1217948628,
      publisher: 'Stitcher & Jolenta Greenberg, Kristen Meinzer',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/by-the-book-stitcher-jolenta-greenberg-KqpS3TeQW6i--sCyAljv4BT.300x300.jpg',
      is_claimed: false,
      description:
        'Half reality show, half self-help podcast, and one wild social experiment. Join comedian Jolenta Greenberg and culture critic Kristen Meinzer as they live by the rules of a different self-help book each episode to figure out which ones might actually be life changing.',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 213,
      listennotes_url:
        'https://www.listennotes.com/c/4e272a4cec844b32be6ad2048d614b28/',
      audio_length_sec: 2044,
      explicit_content: true,
      latest_episode_id: 'e8f7798e160d4fb3987f43443336ad4c',
      latest_pub_date_ms: 1656561600000,
      earliest_pub_date_ms: 1489787580212,
      update_frequency_hours: 218,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '295925e24d5a478f8478ee1026560efc',
      rss: 'http://feeds.wnyc.org/trumpinc',
      type: 'episodic',
      email: 'wnycdigital@gmail.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLndueWMub3JnL3RydW1waW5j',
        spotify_url: '',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'WNYCStudios',
        facebook_handle: 'WNYCStudios',
        amazon_music_url: '',
        instagram_handle: 'wnycstudios',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/trump-inc-wnyc-studios-KfHE1-pj3iw-r2THU0gu3fB.1400x1400.jpg',
      title: 'Trump, Inc. ',
      country: 'United States',
      website:
        'https://www.wnycstudios.org/podcasts/trumpinc?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [216, 99, 135, 67, 93],
      itunes_id: 1344894187,
      publisher: 'WNYC Studios ',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/trump-inc-wnyc-studios-Luv2o8CKclT-r2THU0gu3fB.300x300.jpg',
      is_claimed: false,
      description:
        'He’s the President, yet we’re still trying to answer basic questions about how his business works: What deals are happening, who they’re happening with, and if the President and his family are keeping their promise to separate the Trump Organization from the Trump White House. “Trump, Inc.” is a joint reporting project from WNYC Studios and ProPublica that digs deep into these questions. We’ll be layout out what we know, what we don’t and how you can help us fill in the gaps. \r\nWNYC Studios is a listener-supported producer of other leading podcasts, including On the Media, Radiolab, Death, Sex & Money, Here’s the Thing with Alec Baldwin, Nancy and many others. ProPublica is a non-profit investigative newsroom.\r\n© WNYC Studios',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 98,
      listennotes_url:
        'https://www.listennotes.com/c/295925e24d5a478f8478ee1026560efc/',
      audio_length_sec: 1743,
      explicit_content: false,
      latest_episode_id: '59bae7f9481148cda40b6f1a68d52e4b',
      latest_pub_date_ms: 1651593600000,
      earliest_pub_date_ms: 1517806800000,
      update_frequency_hours: 276,
      listen_score_global_rank: '0.05%',
    },
    {
      id: 'a409b8bb93f44054a7be2d6b30843899',
      rss: 'https://entrepreneuronfire.libsyn.com/rss',
      type: 'episodic',
      email: 'John@EntrepreneurOnFire.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9lbnRyZXByZW5ldXJvbmZpcmUubGlic3luLmNvbS9yc3M=',
        spotify_url: 'https://open.spotify.com/show/25wgHxrQY2e7WNeV4UtECI',
        youtube_url: 'https://www.youtube.com/channel/UCXfzpliAfdjParawJljHo2g',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'johnleedumas',
        facebook_handle: 'johnleedumas1',
        amazon_music_url:
          'https://music.amazon.com/podcasts/4728a7fc-731f-4b18-971b-85b0b8c2e784/entrepreneurs-on-fire',
        instagram_handle: 'johnleedumas',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/entrepreneurs-on-fire-john-lee-dumas-of-rmRvnlE2Lp9-1WOhT7u6VQb.1400x1400.jpg',
      title: 'Entrepreneurs on Fire',
      country: 'United States',
      website:
        'https://www.eofire.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [93, 171, 173, 157, 169, 67, 88, 111, 90, 94, 97],
      itunes_id: 564001633,
      publisher: 'John Lee Dumas of EOFire',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/entrepreneurs-on-fire-john-lee-dumas-of-KdVcHArxN1E-1WOhT7u6VQb.300x300.jpg',
      is_claimed: true,
      description:
        'John Lee Dumas is the founder and host of the award winning podcast, Entrepreneurs On Fire. With over 100 million listens of his 3000+ episodes, JLD has turned Entrepreneurs On Fire into a media empire that generates over a million listens every month and 7-figures of NET annual revenue 8-years in a row. His first traditionally published book, The Common Path to Uncommon Success is the modern day version of Think and Grow Rich with a revolutionary 17-step roadmap to financial freedom and fulfillment. Learn more at UncommonSuccessBook.com',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 3038,
      listennotes_url:
        'https://www.listennotes.com/c/a409b8bb93f44054a7be2d6b30843899/',
      audio_length_sec: 1824,
      explicit_content: false,
      latest_episode_id: 'a4f90e451d7d45cb8826dec330ce7328',
      latest_pub_date_ms: 1657009800000,
      earliest_pub_date_ms: 1348297202946,
      update_frequency_hours: 24,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '53e9a98a9e18406aafef8ccd66369fcb',
      rss: 'http://feeds.feedburner.com/ThePeterSchiffShowPodcast',
      type: 'episodic',
      email: 'customerservice@schiffradio.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cDovL2ZlZWRzLmZlZWRidXJuZXIuY29tL1RoZVBldGVyU2NoaWZmU2hvd1BvZGNhc3Q=',
        spotify_url: 'https://open.spotify.com/show/77ckqkx3MbP1cKhjDjAbDY',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: '',
        facebook_handle: '',
        amazon_music_url: '',
        instagram_handle: '',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-peter-schiff-show-podcast-peter-schiff-Lb2jqs-41rJ-jY5-XW4QLf_.924x924.jpg',
      title: 'The Peter Schiff Show Podcast',
      country: 'United States',
      website:
        'https://schiffradio.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [144, 98, 67, 93],
      itunes_id: 404963432,
      publisher: 'Peter Schiff',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/the-peter-schiff-show-podcast-peter-schiff-Vx7JloDK5Ew-jY5-XW4QLf_.300x300.jpg',
      is_claimed: true,
      description:
        'Peter Schiff is an economist, financial broker/dealer, author, frequent guest on national news, and host of the Peter Schiff Show Podcast. The podcast focuses on economic data analysis and unbiased coverage of financial news, both in the U.S. and global markets. As entertaining as he is informative, Peter packs decades of brilliant insight into every news item. Join the thousands of fans who have benefited from Peter’s commitment to getting the real story out to the world.',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 918,
      listennotes_url:
        'https://www.listennotes.com/c/53e9a98a9e18406aafef8ccd66369fcb/',
      audio_length_sec: 2906,
      explicit_content: false,
      latest_episode_id: '0943e53322ab49b284bb5b295dbd0519',
      latest_pub_date_ms: 1656867756000,
      earliest_pub_date_ms: 1450401062000,
      update_frequency_hours: 88,
      listen_score_global_rank: '0.05%',
    },
    {
      id: '7911e245980f460bb072d4aca3e59278',
      rss: 'https://kwikbrain.libsyn.com/rss',
      type: 'episodic',
      email: 'kwiksupport@gmail.com',
      extra: {
        url1: '',
        url2: '',
        url3: '',
        google_url:
          'https://podcasts.google.com/feed/aHR0cHM6Ly9rd2lrYnJhaW4ubGlic3luLmNvbS9yc3M=',
        spotify_url: '',
        youtube_url: '',
        linkedin_url: '',
        wechat_handle: '',
        patreon_handle: '',
        twitter_handle: 'jimkwik',
        facebook_handle: '',
        amazon_music_url: '',
        instagram_handle: 'jimkwik',
      },
      image:
        'https://cdn-images-1.listennotes.com/podcasts/kwik-brain-with-jim-kwik-jim-kwik-your-xlL8GdyQWMc-ZQJshPf4_6w.1400x1400.jpg',
      title: 'Kwik Brain with Jim Kwik',
      country: 'United States',
      website:
        'https://www.kwikbrain.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
      language: 'English',
      genre_ids: [67, 93, 88, 90, 111, 115],
      itunes_id: 1208024744,
      publisher: 'Jim Kwik, Your Brain Coach, Founder www.KwikLearning.com',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/kwik-brain-with-jim-kwik-jim-kwik-your-XAjnIu6G4M5-ZQJshPf4_6w.300x300.jpg',
      is_claimed: false,
      description:
        'Kwik Brain is a fun, fast-paced show designed to help busy people learn and achieve anything in a fraction of the time! Your coach, Jim Kwik (his real name), is the brain & memory trainer to elite mental performers, including many of the world’s leading CEO’s and celebrities. In this easy to digest bite-sized podcast, you will discover Kwik’s favorite shortcuts to read faster, remember more, and ‘supercharge’ your greatest wealth-building asset: your brain. Whether you’re a student, senior, entrepreneur or educator, you will get the edge with these simple actionable tools to sharpen your mind, enhance your focus, and fast-track your fullest potential. Get show notes, Jim’s latest brain-training, and submit your questions in our private community (free) at: www.KwikBrain.com\n\nJim Kwik is the founder of KwikLearning.com, a widely recognized world leader in speed-reading, memory improvement, brain performance, and accelerated learning with students in over 150 countries.\n\nAfter a childhood brain injury left him learning-challenged, Kwik created strategies to dramatically enhance his mental performance. He has since dedicated his life to helping others unleash their true genius and brainpower to learn anything faster and live a life of greater power, productivity, and purpose.',
      looking_for: {
        guests: false,
        cohosts: false,
        sponsors: false,
        cross_promotion: false,
      },
      listen_score: 71,
      total_episodes: 287,
      listennotes_url:
        'https://www.listennotes.com/c/7911e245980f460bb072d4aca3e59278/',
      audio_length_sec: 1040,
      explicit_content: false,
      latest_episode_id: '5f736461d62a4208adac059e66342ba7',
      latest_pub_date_ms: 1656939607000,
      earliest_pub_date_ms: 1490733924277,
      update_frequency_hours: 167,
      listen_score_global_rank: '0.05%',
    },
  ],
  parent_id: 67,
  page_number: 2,
  has_previous: true,
  listennotes_url: 'https://www.listennotes.com/best-business-podcasts-93/',
  next_page_number: 3,
  previous_page_number: 1,
};

const SearchResults = ({ time, genreId, searchTerm }) => {
  //states
  const [podcasts, setPodcasts] = useState([]);
  const [selectedSubset, setSelectedSubset] = useState([]);

  //custom hook
  const [subsets, getSubsets] = useSubsets([]);

  const getRandomSubset = () => {
    if (subsets.length > 0) {
      const index = Math.floor(Math.random() * subsets.length);
      setSelectedSubset(subsets[index]);
    } else {
      //If no subset matches user's indicated 'time', get single podcast that most closely matches 'time'
      setSelectedSubset([getBestPodcast(time, podcasts)]);
    }
  };

  useEffect(() => {

    if (genreId && searchTerm) {

    axios({
      url: 'https://listen-api.listennotes.com/api/v2/search',
      headers: {
        'X-ListenAPI-Key': 'c17f9dde6c0743f195a962da663f6626'
      },
      params: {
        //CHANGE TO genreId TO GO LIVE
        q: searchTerm,
        genre_ids: genreId,
      },
    }).then((response) => {
      console.log(response);
      setPodcasts(response.data.results);
      getSubsets(response.data.results, time);
    });
  }
  }, [time, genreId]);

    //come back to filld information with variables

  useEffect(() => {
    if (podcasts.length > 0) {
      getRandomSubset();
    }
  }, [subsets]);

  return (
    <section>
      <h1>Search Results</h1>

      {selectedSubset.map((podcast) => {
        return <h1 key={podcast.id}>{podcast.title_original}</h1>;
      })}
      {/* add button here that allows user to grab new subset (ie. shuffle) ONLY if subsets.length>0 */}
    </section>
  );
};

export default SearchResults;
