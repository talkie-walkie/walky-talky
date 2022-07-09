import { useState } from 'react';
import { useEffect } from 'react';
import firebase from '../firebase';
import { ref, getDatabase, push } from 'firebase/database';
import axios from 'axios';
import useSubsets from '../helperFunctions/useSubsets';
import getBestPodcast from '../helperFunctions/getBestPodcast';
import Playlist from './Playlist';
import { useCallback } from 'react';
const data = [
  {
    audio: 'https://www.listennotes.com/e/p/702e7a928683439c81f7e06268ff27ad/',
    audio_length_sec: 1829,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...This week is our last week in Baby World and we\'re discussing the hardest part - decluttering the baby <span class="ln-search-highlight">stuff</span>....',
    description_original:
      '<p>This week is our last week in Baby World and we\'re discussing the hardest part - decluttering the baby stuff. It\'s not an easy task, but we have a few tips to help you navigate it so you aren\'t weighed down by all the stuff for decades to come!</p>\n<p>Thank you to everyone for listening, and for engaging with us in our <a href="https://www.facebook.com/groups/674317126272323/">Facebook group</a> - it\'s so lovely to interact with people other than just ourselves about the episodes. </p>\n<p>Thanks especially if you\'re a Patreon supporter. If you love it, and want it to stay ad-free, you are invited to become a Patreon supporter, too -  you can do so on our <a href="http://www.beuncluttered.com.au/">website</a>.  </p>\n<p>We\'d love you to get in touch to discuss anything about the podcast. You can send us an email at rebecca@rebeccamezzino.com.au, basklifecoaching@outlook.com, or any of the links below will help you get in touch too.</p>\n\nOur website:<a href="http://www.beuncluttered.com.au/"> www.beuncluttered.com.au</a> (we also have more detailed shownotes there)\n\nOur Facebook page:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.facebook.com/beuncluttered"> </a><a href="http://www.facebook.com/beuncluttered">www.facebook.com/beuncluttered</a>\nOur Facebook Community Group:<a href="https://www.facebook.com/groups/674317126272323/"> https://www.facebook.com/groups/674317126272323/</a>\nOur Insta: <a href="http://www.instagram.com/beuncluttered">www.instagram.com/beuncluttered</a>\nTara\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.basklifecoaching.com"> </a><a href="http://www.basklifecoaching.com/">www.basklifecoaching.com</a>\nBec\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.clearspace.net.au"> </a><a href="http://www.clearspace.net.au/">www.rebeccamezzino.com.au</a>',
    title_highlighted:
      'Decluttering baby <span class="ln-search-highlight">stuff</span>',
    title_original: 'Decluttering baby stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    itunes_id: 1440363714,
    pub_date_ms: 1650414900000,
    id: '702e7a928683439c81f7e06268ff27ad',
    listennotes_url:
      'https://www.listennotes.com/e/702e7a928683439c81f7e06268ff27ad/',
    explicit_content: false,
    link: 'https://beuncluttered.podbean.com/e/decluttering-baby-stuff/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss:
      'beuncluttered.podbean.com/08d92785-7e78-33f9-9176-6cb7aceba152',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
      id: '12d7b4462f9948388e36dcc49820b6ee',
      title_highlighted: 'Be Uncluttered',
      title_original: 'Be Uncluttered',
      publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
      publisher_original: 'Rebecca Mezzino and Tara Tuttle',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      genre_ids: [90, 88],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
    podcast_id: '12d7b4462f9948388e36dcc49820b6ee',
    podcast_title_highlighted: 'Be Uncluttered',
    podcast_title_original: 'Be Uncluttered',
    publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
    publisher_original: 'Rebecca Mezzino and Tara Tuttle',
    genre_ids: [90, 88],
  },
  {
    audio: 'https://www.listennotes.com/e/p/5260d27011e34f25bd05d6667c035484/',
    audio_length_sec: 196,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...In this episode, Urban Farmer Curtis Stone talks about the importance of both researching and trying out new things.   Make farming easier with the Paperpot Transplanter and Other Small Farm Equipment at https://www.paperpot.co/ Follow PaperpotCo on IG https://instagram.com/paperpotco Podcasts by Diego Footer: Microgreens: https://apple.co/2m1QXmW Vegetable Farming: https://apple.co/2lCuv3m Livestock Farming: https://apple.co/2m75EVG Large Scale Farming: https://apple.co/2kxj39i Small Farm Tools https://www.paperpot.co/...',
    description_original:
      '<p>In this episode, Urban Farmer Curtis Stone talks about the importance of both researching and trying out new things.  </p> <p>Make farming easier with the <a href="https://www.paperpot.co/">Paperpot Transplanter and Other Small Farm Equipment</a> at <a href="https://www.paperpot.co/">https://www.paperpot.co/</a></p> <p class="p2">Follow PaperpotCo on IG <a href="https://instagram.com/paperpotco">https://instagram.com/paperpotco</a></p> <p class="p1">Podcasts by Diego Footer: Microgreens: <a href="https://apple.co/2m1QXmW">https://apple.co/2m1QXmW</a> Vegetable Farming: <a href="https://apple.co/2lCuv3m">https://apple.co/2lCuv3m</a> Livestock Farming: <a href="https://apple.co/2m75EVG">https://apple.co/2m75EVG</a> Large Scale Farming: <a href="https://apple.co/2kxj39i">https://apple.co/2kxj39i</a></p> <p class="p2">Small Farm Tools <a href="https://www.paperpot.co/">https://www.paperpot.co/</a></p>',
    title_highlighted:
      'Research and Try <span class="ln-search-highlight">Stuff</span>',
    title_original: 'Research and Try Stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/farm-small-farm-smart-daily-the-modern-FJC5h9qbe8B-QvreX-DPhTl.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/farm-small-farm-smart-daily-the-modern-FJC5h9qbe8B-QvreX-DPhTl.300x300.jpg',
    itunes_id: 676930917,
    pub_date_ms: 1646215200109,
    id: '5260d27011e34f25bd05d6667c035484',
    listennotes_url:
      'https://www.listennotes.com/e/5260d27011e34f25bd05d6667c035484/',
    explicit_content: false,
    link: 'https://traffic.libsyn.com/secure/permaculturevoices/135_FSFSs_CurtisStone_ResearchAndTryStuff?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss: '58532fd4-fde4-40df-9049-a5a5d2da1a53',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/b0b0bb75ee7d454aaffd16441885d2f7/',
      id: 'b0b0bb75ee7d454aaffd16441885d2f7',
      title_highlighted: 'Farm Small Farm Smart Daily',
      title_original: 'Farm Small Farm Smart Daily',
      publisher_highlighted: 'The Modern Grower Podcast Network',
      publisher_original: 'The Modern Grower Podcast Network',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/farm-small-farm-smart-daily-the-modern-FJC5h9qbe8B-QvreX-DPhTl.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/farm-small-farm-smart-daily-the-modern-FJC5h9qbe8B-QvreX-DPhTl.300x300.jpg',
      genre_ids: [86, 82, 107, 110, 88, 91, 111, 115],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/b0b0bb75ee7d454aaffd16441885d2f7/',
    podcast_id: 'b0b0bb75ee7d454aaffd16441885d2f7',
    podcast_title_highlighted: 'Farm Small Farm Smart Daily',
    podcast_title_original: 'Farm Small Farm Smart Daily',
    publisher_highlighted: 'The Modern Grower Podcast Network',
    publisher_original: 'The Modern Grower Podcast Network',
    genre_ids: [86, 82, 107, 110, 88, 91, 111, 115],
  },
  {
    audio: 'https://www.listennotes.com/e/p/bd7ea7314e9e407d87d66b4720b57293/',
    audio_length_sec: 2492,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...When we talk about "giving up <span class="ln-search-highlight">stuff</span>," we are talking about things that might be counterproductive to your happiness, your health, or your relationships. So you can decide what you need to give up....',
    description_original:
      '<p>When we talk about "giving up stuff," we are talking about things that might be counterproductive to your happiness, your health, or your relationships. </p><p>So you can decide what you need to give up. </p><p>We\'re going to give you some examples, and we\'ll go from there.</p><p><em>In each episode, Jeff and Eric will talk about what emotional intelligence, or understanding your emotions, can do for you in your daily and work life. For more information, contact Eric or Jeff at info@spiritofeq.com, or go to their website,</em><a href="http://www.spiritofeq.com/" rel="noopener noreferrer" target="_blank"><em>&nbsp;</em><strong><em>Spirit of EQ</em></strong></a><strong><em><span>.</span></em></strong></p><p><em>You can follow The Spirit of EQ Podcast on&nbsp;</em><a href="https://itunes.apple.com/us/podcast/spirit-of-eq-podcast/id1309831506" rel="noopener noreferrer" target="_blank"><strong><em>Apple Podcasts</em></strong></a><strong><em><span>, </span></em></strong><a href="https://podcasts.google.com/?feed=aHR0cDovL3NwaXJ0LW9mLWVxLmJsdWJycnkubmV0L2ZlZWQvcG9kY2FzdC8%3D&amp;hl=en" rel="noopener noreferrer" target="_blank"><strong><em>Google Podcasts</em></strong></a><strong><em><span>,</span></em></strong><a href="https://subscribeonandroid.com/" rel="noopener noreferrer" target="_blank"><strong><em> on Android</em></strong></a><em><span>, or your favorite podcast player.</span></em></p><p><em>New episodes are available on the 2nd and 4th Mondays every month!</em></p><p><a href="http://pleasereviewmypodcast.com/eq" rel="noopener noreferrer" target="_blank"><em>Please review our podcast </em></a><em><span>on iTunes.&nbsp;Click on the link for an easy, step-by-step tutorial.</span></em></p><p><br /></p><p><br /></p><p>Music from Uppbeat</p><p>https://uppbeat.io/t/roo-walker/deeper</p><p>License code: LB1BTATHVF4VIFGQ</p><p>Spirit of EQ </p><p>Mentioned in this episode:</p><p><strong>Thanks for listening to Spirit of EQ</strong></p><p>This podcast was created to be a tool to primarily help you to discover and grow your EQ. Science and our own lived experiences confirm that the better we are at managing our emotions, the better we\'re going to be at making decisions. Which leads to a better life. And that\'s something we all want. We\'re glad that you\'ve taken the time today to listen. We hope that something you hear will lead to a breakthrough. We\'d really appreciate a review on your podcast platform. Please leave some comments about what you heard today, as well as follow and subscribe to the podcast. That way, you won\'t miss a single episode as we continue this journey.</p>',
    title_highlighted:
      'Giving Up <span class="ln-search-highlight">Stuff</span>',
    title_original: 'Giving Up Stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/spirit-of-eq-jeff-east-and-eric-pennington--ZsdQS52thH-5SH3IovgsaN.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/spirit-of-eq-jeff-east-and-eric-pennington--ZsdQS52thH-5SH3IovgsaN.300x300.jpg',
    itunes_id: 1309831506,
    pub_date_ms: 1655892000000,
    id: 'bd7ea7314e9e407d87d66b4720b57293',
    listennotes_url:
      'https://www.listennotes.com/e/bd7ea7314e9e407d87d66b4720b57293/',
    explicit_content: false,
    link: 'https://spiritofeq.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss: '659835a0-2b79-4959-9d9f-0fc39da40157',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/ba230275092144b7bfb4d40bfe5e31ae/',
      id: 'ba230275092144b7bfb4d40bfe5e31ae',
      title_highlighted: 'Spirit of EQ',
      title_original: 'Spirit of EQ',
      publisher_highlighted: 'Jeff East and Eric Pennington',
      publisher_original: 'Jeff East and Eric Pennington',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/spirit-of-eq-jeff-east-and-eric-pennington--ZsdQS52thH-5SH3IovgsaN.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/spirit-of-eq-jeff-east-and-eric-pennington--ZsdQS52thH-5SH3IovgsaN.300x300.jpg',
      genre_ids: [88, 90, 93, 94],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/ba230275092144b7bfb4d40bfe5e31ae/',
    podcast_id: 'ba230275092144b7bfb4d40bfe5e31ae',
    podcast_title_highlighted: 'Spirit of EQ',
    podcast_title_original: 'Spirit of EQ',
    publisher_highlighted: 'Jeff East and Eric Pennington',
    publisher_original: 'Jeff East and Eric Pennington',
    genre_ids: [88, 90, 93, 94],
  },
  {
    audio: 'https://www.listennotes.com/e/p/badb3038d8d04fab9e073a764c1ee417/',
    audio_length_sec: 2390,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...thedagnyfoundation.org https://dagny2022.eventbrite.com  ...',
    description_original:
      '<p>thedagnyfoundation.org</p> <p class="p1"><a href="https://dagny2022.eventbrite.com/">https://dagny2022.eventbrite.com</a></p> <p class="p1"> </p>',
    title_highlighted:
      'EB Shares Some Personal <span class="ln-search-highlight">Stuff</span>',
    title_original: 'EB Shares Some Personal Stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/primal-potential-primal-potential-with-Zo4pzhkjFbe-oyJvjk3eLac.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/primal-potential-primal-potential-with-Zo4pzhkjFbe-oyJvjk3eLac.300x300.jpg',
    itunes_id: 954984769,
    pub_date_ms: 1653980407000,
    id: 'badb3038d8d04fab9e073a764c1ee417',
    listennotes_url:
      'https://www.listennotes.com/e/badb3038d8d04fab9e073a764c1ee417/',
    explicit_content: true,
    link: 'http://primalpotential.libsyn.com/eb-shares-some-personal-stuff?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss: 'ab16e027-b575-4d42-9f10-6f95b3a73671',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/682f6bca3adb4791af041da13cdb643e/',
      id: '682f6bca3adb4791af041da13cdb643e',
      title_highlighted: 'Primal Potential',
      title_original: 'Primal Potential',
      publisher_highlighted: 'Primal Potential with Elizabeth Benton',
      publisher_original: 'Primal Potential with Elizabeth Benton',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/primal-potential-primal-potential-with-Zo4pzhkjFbe-oyJvjk3eLac.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/primal-potential-primal-potential-with-Zo4pzhkjFbe-oyJvjk3eLac.300x300.jpg',
      genre_ids: [88, 89, 90],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/682f6bca3adb4791af041da13cdb643e/',
    podcast_id: '682f6bca3adb4791af041da13cdb643e',
    podcast_title_highlighted: 'Primal Potential',
    podcast_title_original: 'Primal Potential',
    publisher_highlighted: 'Primal Potential with Elizabeth Benton',
    publisher_original: 'Primal Potential with Elizabeth Benton',
    genre_ids: [88, 89, 90],
  },
  {
    audio: 'https://www.listennotes.com/e/p/460cbf6b801645808318493a0f6c5065/',
    audio_length_sec: 237,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...Studies show that greeting our shortcomings with self-compassion has proven to be more effective than being critical. When we speak to ourselves as a supportive friend, we greet our mistakes with a deep sense of safety and acceptance, feeling empowered to learn and grow instead of giving up.If you’d like to connect with Sam, you can follow her on Instagram at @anchored_samTry the Headspace app free for 30 days here!...',
    description_original:
      '<p>Studies show that greeting our shortcomings with self-compassion has proven to be more effective than being critical. When we speak to ourselves as a supportive friend, we greet our mistakes with a deep sense of safety and acceptance, feeling empowered to learn and grow instead of giving up.</p><p>If you’d like to connect with Sam, you can follow her on Instagram at <a href="https://www.instagram.com/anchored_sam/?hl=en">@anchored_sam</a></p><p>Try the Headspace app free for 30 days <a href="https://www.headspace.com/radioheadspace">here</a>!</p>',
    title_highlighted:
      'Focus on the Good <span class="ln-search-highlight">Stuff</span>',
    title_original: 'Focus on the Good Stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
    itunes_id: 1510981488,
    pub_date_ms: 1652943900028,
    id: '460cbf6b801645808318493a0f6c5065',
    listennotes_url:
      'https://www.listennotes.com/e/460cbf6b801645808318493a0f6c5065/',
    explicit_content: false,
    link: 'https://www.headspace.com/radioheadspace?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss: 'd81e7c94-4559-4e09-8213-a5c7a20039b0',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/c255c17ba5ff411f9067ba9278f5c26d/',
      id: 'c255c17ba5ff411f9067ba9278f5c26d',
      title_highlighted: 'Radio Headspace',
      title_original: 'Radio Headspace',
      publisher_highlighted: 'Headspace Studios',
      publisher_original: 'Headspace Studios',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
      genre_ids: [88, 191],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/c255c17ba5ff411f9067ba9278f5c26d/',
    podcast_id: 'c255c17ba5ff411f9067ba9278f5c26d',
    podcast_title_highlighted: 'Radio Headspace',
    podcast_title_original: 'Radio Headspace',
    publisher_highlighted: 'Headspace Studios',
    publisher_original: 'Headspace Studios',
    genre_ids: [88, 191],
  },
  {
    audio: 'https://www.listennotes.com/e/p/b7bdcd9220a54889bf07b211d7c38c5b/',
    audio_length_sec: 2688,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...and some gross <span class="ln-search-highlight">stuff</span> about fruit gases. Well it\'s gross if you think of it how Bec thinks of it....\n \nThanks so much for listening to our podcast....',
    description_original:
      'This week we\'re doing a practical episode and we\'re decluttering and organising the fridge.  There\'s a welcome return to some stats (we\'ve missed Tara\'s stats!) and some gross stuff about fruit gases. Well it\'s gross if you think of it how Bec thinks of it....\n \nThanks so much for listening to our podcast. If you love it, and want it to stay ad-free, you are invited to become a Patreon supporter -  you can do so on our <a href="http://www.beuncluttered.com.au/">website</a>. \n \nWe\'d love you to get in touch to discuss anything about the podcast. You can send us an email at rebecca@clearspace.net.au, basklifecoaching@outlook.com, or any of the links below will help you get in touch too.\n \nOur website:<a href="http://www.beuncluttered.com.au/"> www.beuncluttered.com.au</a> (we also have more detailed shownotes there)\nOur Facebook page:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.facebook.com/beuncluttered"> </a><a href="http://www.facebook.com/beuncluttered">www.facebook.com/beuncluttered</a>\nOur Facebook Community Group:<a href="https://www.facebook.com/groups/674317126272323/"> https://www.facebook.com/groups/674317126272323/</a>\nOur Insta: <a href="http://www.instagram.com/beuncluttered">www.instagram.com/beuncluttered</a>\nTara\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.basklifecoaching.com"> </a><a href="http://www.basklifecoaching.com/">www.basklifecoaching.com</a>\nBec\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.clearspace.net.au"> </a><a href="http://www.clearspace.net.au/">www.clearspace.net.au</a>\n<p> </p>',
    title_highlighted: 'Fridge <span class="ln-search-highlight">stuff</span>',
    title_original: 'Fridge stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    itunes_id: 1440363714,
    pub_date_ms: 1615334400052,
    id: 'b7bdcd9220a54889bf07b211d7c38c5b',
    listennotes_url:
      'https://www.listennotes.com/e/b7bdcd9220a54889bf07b211d7c38c5b/',
    explicit_content: false,
    link: 'https://beuncluttered.podbean.com/e/fridge-stuff/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss:
      'beuncluttered.podbean.com/6808a51c-519c-3a60-8930-b28e52ea2bfd',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
      id: '12d7b4462f9948388e36dcc49820b6ee',
      title_highlighted: 'Be Uncluttered',
      title_original: 'Be Uncluttered',
      publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
      publisher_original: 'Rebecca Mezzino and Tara Tuttle',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      genre_ids: [90, 88],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
    podcast_id: '12d7b4462f9948388e36dcc49820b6ee',
    podcast_title_highlighted: 'Be Uncluttered',
    podcast_title_original: 'Be Uncluttered',
    publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
    publisher_original: 'Rebecca Mezzino and Tara Tuttle',
    genre_ids: [90, 88],
  },
  {
    audio: 'https://www.listennotes.com/e/p/4b7e3f59b63a41ed814dd72816c06643/',
    audio_length_sec: 2521,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      "...This episode addresses some of the items that our listeners have trouble finding homes for.  We give you some ideas on where you might stash some of those items, and also re-visit the \"why\" around having homes for things.\n\nThanks so much for listening to our podcast. If you love it, and want it to stay ad-free, you are invited to become a Patreon supporter -  you can do so on our website.  \n\nWe'd love you to get in touch to discuss anything about the podcast. You can send us an email at rebecca@clearspace.net.au, basklifecoaching@outlook.com, or any of the links below will help you get in touch too.\n\n\n \nOur website: www.beuncluttered.com.au (we also have more detailed shownotes there)\nOur Facebook page: www.facebook.com/beuncluttered\nOur Facebook Community Group: https://www.facebook.com/groups/674317126272323/\nOur Insta: www.instagram.com/beuncluttered\nTara's website: www.basklifecoaching.com\nBec's website: www.rebeccamezzino.com.au...",
    description_original:
      '<p>This episode addresses some of the items that our listeners have trouble finding homes for.  We give you some ideas on where you might stash some of those items, and also re-visit the "why" around having homes for things.</p>\n\n<p>Thanks so much for listening to our podcast. If you love it, and want it to stay ad-free, you are invited to become a Patreon supporter -  you can do so on our <a href="http://www.beuncluttered.com.au/">website</a>.  </p>\n\n<p>We\'d love you to get in touch to discuss anything about the podcast. You can send us an email at rebecca@clearspace.net.au, basklifecoaching@outlook.com, or any of the links below will help you get in touch too.</p>\n\n\n \nOur website:<a href="http://www.beuncluttered.com.au/"> www.beuncluttered.com.au</a> (we also have more detailed shownotes there)\nOur Facebook page:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.facebook.com/beuncluttered"> </a><a href="http://www.facebook.com/beuncluttered">www.facebook.com/beuncluttered</a>\nOur Facebook Community Group:<a href="https://www.facebook.com/groups/674317126272323/"> https://www.facebook.com/groups/674317126272323/</a>\nOur Insta: <a href="http://www.instagram.com/beuncluttered">www.instagram.com/beuncluttered</a>\nTara\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.basklifecoaching.com"> </a><a href="http://www.basklifecoaching.com/">www.basklifecoaching.com</a>\nBec\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.clearspace.net.au"> </a><a href="http://www.clearspace.net.au/">www.rebeccamezzino.com.au</a>',
    title_highlighted:
      'Where to put <span class="ln-search-highlight">stuff</span>',
    title_original: 'Where to put stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    itunes_id: 1440363714,
    pub_date_ms: 1631139531026,
    id: '4b7e3f59b63a41ed814dd72816c06643',
    listennotes_url:
      'https://www.listennotes.com/e/4b7e3f59b63a41ed814dd72816c06643/',
    explicit_content: false,
    link: 'https://beuncluttered.podbean.com/e/where-to-put-stuff/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss:
      'beuncluttered.podbean.com/c340d249-80e9-37d6-86fe-2668862a77c8',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
      id: '12d7b4462f9948388e36dcc49820b6ee',
      title_highlighted: 'Be Uncluttered',
      title_original: 'Be Uncluttered',
      publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
      publisher_original: 'Rebecca Mezzino and Tara Tuttle',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      genre_ids: [90, 88],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
    podcast_id: '12d7b4462f9948388e36dcc49820b6ee',
    podcast_title_highlighted: 'Be Uncluttered',
    podcast_title_original: 'Be Uncluttered',
    publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
    publisher_original: 'Rebecca Mezzino and Tara Tuttle',
    genre_ids: [90, 88],
  },
  {
    audio: 'https://www.listennotes.com/e/p/eee09791893745b78dc10c6da2cb6fdc/',
    audio_length_sec: 91,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...Body <span class="ln-search-highlight">Stuff</span> is another podcast in the TED Audio collective, and you can find it wherever you\'re listening to this....',
    description_original:
      "<p>Can you REALLY boost your metabolism? Is blue light actually ruining your sleep? How much vaginal yeast is healthy and when is it … too much? Body Stuff with Dr. Jen Gunter is BACK for a second season to bust the lies you’re told—and sold—about your personal health. Join Dr. Jen Gunter as she addresses common myths– from breaking down the incredible ways our senses of taste and smell work, to debunking some of the harmful misconceptions about opioids, to addressing the biggest pain on our backs (literally). Whether you are curious to learn more about the world inside you, or are wanting to escape the online hot takes that promise to tell you how to optimize your health, this season dives even deeper into helping you understand how your body REALLY works. Body Stuff is another podcast in the TED Audio collective, and you can find it wherever you're listening to this.</p>",
    title_highlighted:
      'Body <span class="ln-search-highlight">Stuff</span> with Dr. Jen Gunter',
    title_original: 'Body Stuff with Dr. Jen Gunter',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/ted-health-ted-Huegz2ZU5_Q-E-oUK8AZGa2.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/ted-health-ted-Huegz2ZU5_Q-E-oUK8AZGa2.300x300.jpg',
    itunes_id: 470623173,
    pub_date_ms: 1653019200007,
    id: 'eee09791893745b78dc10c6da2cb6fdc',
    listennotes_url:
      'https://www.listennotes.com/e/eee09791893745b78dc10c6da2cb6fdc/',
    explicit_content: false,
    link: 'http://ted.com/podcasts?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss: 'prx_343_58e57bfd-d593-4ff4-bedc-9ca994fe6cad',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/943c2da80d3b42f99c266ad3f9c06b5d/',
      id: '943c2da80d3b42f99c266ad3f9c06b5d',
      title_highlighted: 'TED Health',
      title_original: 'TED Health',
      publisher_highlighted: 'TED',
      publisher_original: 'TED',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/ted-health-ted-Huegz2ZU5_Q-E-oUK8AZGa2.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/ted-health-ted-Huegz2ZU5_Q-E-oUK8AZGa2.300x300.jpg',
      genre_ids: [88, 109, 89, 107],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/943c2da80d3b42f99c266ad3f9c06b5d/',
    podcast_id: '943c2da80d3b42f99c266ad3f9c06b5d',
    podcast_title_highlighted: 'TED Health',
    podcast_title_original: 'TED Health',
    publisher_highlighted: 'TED',
    publisher_original: 'TED',
    genre_ids: [88, 109, 89, 107],
  },
  {
    audio: 'https://www.listennotes.com/e/p/712d4d24db4d48d688d4677cd4e6f746/',
    audio_length_sec: 243,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      '...It’s the good <span class="ln-search-highlight">stuff</span> and Catherine wants you to have more of it. You can learn more about Catherine’s work at HowtoHaveFun.com....',
    description_original:
      '<p>Part 3 of “The Funtervention”. Today Catherine distinguishes “true fun” from “fake fun”. We learn how to identify both and why “true fun” makes our lives exhilarating. These are the things that bring a smile to our face and warmth to our heart. It’s the good stuff and Catherine wants you to have more of it. You can learn more about Catherine’s work at HowtoHaveFun.com.</p>',
    title_highlighted:
      'True Fun (The Good <span class="ln-search-highlight">Stuff</span>)',
    title_original: 'True Fun (The Good Stuff)',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
    itunes_id: 1510981488,
    pub_date_ms: 1639526700139,
    id: '712d4d24db4d48d688d4677cd4e6f746',
    listennotes_url:
      'https://www.listennotes.com/e/712d4d24db4d48d688d4677cd4e6f746/',
    explicit_content: false,
    link: 'https://www.headspace.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss: '5e0eddbb-dc20-4eac-858c-b900ba1246ca',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/c255c17ba5ff411f9067ba9278f5c26d/',
      id: 'c255c17ba5ff411f9067ba9278f5c26d',
      title_highlighted: 'Radio Headspace',
      title_original: 'Radio Headspace',
      publisher_highlighted: 'Headspace Studios',
      publisher_original: 'Headspace Studios',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/radio-headspace-headspace-studios-Dy4BJn6vLNV-pLlwW7eNty_.300x300.jpg',
      genre_ids: [88, 191],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/c255c17ba5ff411f9067ba9278f5c26d/',
    podcast_id: 'c255c17ba5ff411f9067ba9278f5c26d',
    podcast_title_highlighted: 'Radio Headspace',
    podcast_title_original: 'Radio Headspace',
    publisher_highlighted: 'Headspace Studios',
    publisher_original: 'Headspace Studios',
    genre_ids: [88, 191],
  },
  {
    audio: 'https://www.listennotes.com/e/p/72e72150bf114ffc98f63134d3226efe/',
    audio_length_sec: 1670,
    rss: 'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    description_highlighted:
      "...This week we're diving into Baby World.  There's lots to talk about with regards to babies and clutter, and this week we're starting with the marketing that's used to sell us the baby gear.\nForewarned is forearmed!\nThank you to everyone for listening, and for engaging with us in our Facebook group - it's so lovely to interact with people other than just ourselves about the episodes. \nThanks especially if you're a Patreon supporter. If you love it, and want it to stay ad-free, you are invited to become a Patreon supporter, too -  you can do so on our website.  \nWe'd love you to get in touch to discuss anything about the podcast. You can send us an email at rebecca@rebeccamezzino.com.au, basklifecoaching@outlook.com, or any of the links below will help you get in touch too.\n\nOur website: www.beuncluttered.com.au (we also have more detailed shownotes there)\n\nOur Facebook page: www.facebook.com/beuncluttered\nOur Facebook Community Group: https://www.facebook.com/groups/674317126272323/\nOur Insta: www.instagram.com/beuncluttered\nTara's website: www.basklifecoaching.com\nBec's website: www.rebeccamezzino.com.au...",
    description_original:
      '<p>This week we\'re diving into Baby World.  There\'s lots to talk about with regards to babies and clutter, and this week we\'re starting with the marketing that\'s used to sell us the baby gear.</p>\n<p>Forewarned is forearmed!</p>\n<p>Thank you to everyone for listening, and for engaging with us in our <a href="https://www.facebook.com/groups/674317126272323/">Facebook group</a> - it\'s so lovely to interact with people other than just ourselves about the episodes. </p>\n<p>Thanks especially if you\'re a Patreon supporter. If you love it, and want it to stay ad-free, you are invited to become a Patreon supporter, too -  you can do so on our <a href="http://www.beuncluttered.com.au/">website</a>.  </p>\n<p>We\'d love you to get in touch to discuss anything about the podcast. You can send us an email at rebecca@rebeccamezzino.com.au, basklifecoaching@outlook.com, or any of the links below will help you get in touch too.</p>\n\nOur website:<a href="http://www.beuncluttered.com.au/"> www.beuncluttered.com.au</a> (we also have more detailed shownotes there)\n\nOur Facebook page:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.facebook.com/beuncluttered"> </a><a href="http://www.facebook.com/beuncluttered">www.facebook.com/beuncluttered</a>\nOur Facebook Community Group:<a href="https://www.facebook.com/groups/674317126272323/"> https://www.facebook.com/groups/674317126272323/</a>\nOur Insta: <a href="http://www.instagram.com/beuncluttered">www.instagram.com/beuncluttered</a>\nTara\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.basklifecoaching.com"> </a><a href="http://www.basklifecoaching.com/">www.basklifecoaching.com</a>\nBec\'s website:<a href="https://dashboard.whooshkaa.com/rebecca-mezzino/episodes/330884/www.clearspace.net.au"> </a><a href="http://www.clearspace.net.au/">www.rebeccamezzino.com.au</a>',
    title_highlighted:
      'Why we buy lots of baby <span class="ln-search-highlight">stuff</span>',
    title_original: 'Why we buy lots of baby stuff',
    transcripts_highlighted: [],
    image:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
    itunes_id: 1440363714,
    pub_date_ms: 1649287920000,
    id: '72e72150bf114ffc98f63134d3226efe',
    listennotes_url:
      'https://www.listennotes.com/e/72e72150bf114ffc98f63134d3226efe/',
    explicit_content: false,
    link: 'https://beuncluttered.podbean.com/e/baby-stuff-marketing-that-makes-you-buy-stuff/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    guid_from_rss:
      'beuncluttered.podbean.com/2eb669c2-dc4b-3753-acac-c3e6cb13eb12',
    podcast: {
      listennotes_url:
        'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
      id: '12d7b4462f9948388e36dcc49820b6ee',
      title_highlighted: 'Be Uncluttered',
      title_original: 'Be Uncluttered',
      publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
      publisher_original: 'Rebecca Mezzino and Tara Tuttle',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      thumbnail:
        'https://cdn-images-1.listennotes.com/podcasts/be-uncluttered-rebecca-mezzino-and-tara-teSWJK_FQVj-j6OPEGoMVDw.300x300.jpg',
      genre_ids: [90, 88],
      listen_score:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
      listen_score_global_rank:
        'Please upgrade to PRO or ENTERPRISE plan to see this field. Learn more: listennotes.com/api/pricing',
    },
    podcast_listennotes_url:
      'https://www.listennotes.com/c/12d7b4462f9948388e36dcc49820b6ee/',
    podcast_id: '12d7b4462f9948388e36dcc49820b6ee',
    podcast_title_highlighted: 'Be Uncluttered',
    podcast_title_original: 'Be Uncluttered',
    publisher_highlighted: 'Rebecca Mezzino and Tara Tuttle',
    publisher_original: 'Rebecca Mezzino and Tara Tuttle',
    genre_ids: [90, 88],
  },
];

const SearchResults = ({ time, genreId, searchTerm }) => {
  //states
  const [podcasts, setPodcasts] = useState([]);
  const [selectedSubset, setSelectedSubset] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  //custom hook
  const [subsets, getSubsets] = useSubsets([]);

  const getRandomSubset = useCallback(() => {
    if (subsets.length > 0) {
      const index = Math.floor(Math.random() * subsets.length);
      setSelectedSubset(subsets[index]);
    } else {
      //If no subset matches user's indicated 'time', get single podcast that most closely matches 'time'
      setSelectedSubset([getBestPodcast(time, podcasts)]);
    }
  }, [podcasts, subsets, time]);

  const savePlaylist = (name, selectedSubset) => {
    if (name && selectedSubset) {
      const database = getDatabase(firebase);
      const dbRef = ref(database);

      push(dbRef, {
        playlistName: name,
        podcasts: selectedSubset,
      });

      setPlaylistName('');
    }
  };

  useEffect(() => {
    // if (genreId && searchTerm) {
    //   axios({
    //     url: 'https://listen-api.listennotes.com/api/v2/search',
    //     headers: {
    //       'X-ListenAPI-Key': 'c17f9dde6c0743f195a962da663f6626',
    //     },
    //     params: {
    //       q: searchTerm,
    //       genre_ids: genreId,
    //     },
    //   }).then((response) => {
    //     console.log(response.data.results);
    //     setPodcasts(response.data.results);
    //     getSubsets(response.data.results, time);
    //   });
    // }
    setPodcasts(data);
    getSubsets(data, time);
  }, [time, genreId, searchTerm, getSubsets]);

  useEffect(() => {
    if (podcasts.length > 0) {
      getRandomSubset();
    }
  }, [getRandomSubset, podcasts.length, subsets]);

  return (
    <section>
      <h3>Search Results</h3>
      <Playlist subset={selectedSubset} />
      <div>
        <label htmlFor="playlist-name">Name Your Playlist</label>
        <input
          type="text"
          id="playlist-name"
          value={playlistName}
          onChange={(e) => {
            setPlaylistName(e.target.value);
          }}
        />
        <button onClick={() => savePlaylist(playlistName, selectedSubset)}>
          Save Playlist
        </button>
      </div>
      {/* add button here that allows user to grab new subset (ie. shuffle) ONLY if subsets.length>0 */}
    </section>
  );
};

export default SearchResults;
