<script setup>
    import { ref } from 'vue';
        
    const movieList = [
      {
        "title": "The Great Lands",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/the-great-lands/regular/small.jpg",
            "medium": "../assets/thumbnails/the-great-lands/regular/medium.jpg",
            "large": "../assets/thumbnails/the-great-lands/regular/large.jpg"
          }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "The Diary",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/the-diary/regular/small.jpg",
            "medium": "../assets/thumbnails/the-diary/regular/medium.jpg",
            "large": "../assets/thumbnails/the-diary/regular/large.jpg"
          }
        },
        "year": 2019,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Earth’s Untouched",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/earths-untouched/regular/small.jpg",
            "medium": "../assets/thumbnails/earths-untouched/regular/medium.jpg",
            "large": "../assets/thumbnails/earths-untouched/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "No Land Beyond",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/no-land-beyond/regular/small.jpg",
            "medium": "../assets/thumbnails/no-land-beyond/regular/medium.jpg",
            "large": "../assets/thumbnails/no-land-beyond/regular/large.jpg"
          }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "During the Hunt",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/during-the-hunt/regular/small.jpg",
            "medium": "../assets/thumbnails/during-the-hunt/regular/medium.jpg",
            "large": "../assets/thumbnails/during-the-hunt/regular/large.jpg"
          }
        },
        "year": 2016,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Autosport the Series",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/autosport-the-series/regular/small.jpg",
            "medium": "../assets/thumbnails/autosport-the-series/regular/medium.jpg",
            "large": "../assets/thumbnails/autosport-the-series/regular/large.jpg"
          }
        },
        "year": 2016,
        "category": "TV Series",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Same Answer II",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/same-answer-2/regular/small.jpg",
            "medium": "../assets/thumbnails/same-answer-2/regular/medium.jpg",
            "large": "../assets/thumbnails/same-answer-2/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Below Echo",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/below-echo/regular/small.jpg",
            "medium": "../assets/thumbnails/below-echo/regular/medium.jpg",
            "large": "../assets/thumbnails/below-echo/regular/large.jpg"
          }
        },
        "year": 2016,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "The Rockies",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/the-rockies/regular/small.jpg",
            "medium": "../assets/thumbnails/the-rockies/regular/medium.jpg",
            "large": "../assets/thumbnails/the-rockies/regular/large.jpg"
          }
        },
        "year": 2015,
        "category": "TV Series",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "Relentless",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/relentless/regular/small.jpg",
            "medium": "../assets/thumbnails/relentless/regular/medium.jpg",
            "large": "../assets/thumbnails/relentless/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "Community of Ours",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/community-of-ours/regular/small.jpg",
            "medium": "../assets/thumbnails/community-of-ours/regular/medium.jpg",
            "large": "../assets/thumbnails/community-of-ours/regular/large.jpg"
          }
        },
        "year": 2018,
        "category": "TV Series",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Van Life",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/van-life/regular/small.jpg",
            "medium": "../assets/thumbnails/van-life/regular/medium.jpg",
            "large": "../assets/thumbnails/van-life/regular/large.jpg"
          }
        },
        "year": 2015,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "The Heiress",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/the-heiress/regular/small.jpg",
            "medium": "../assets/thumbnails/the-heiress/regular/medium.jpg",
            "large": "../assets/thumbnails/the-heiress/regular/large.jpg"
          }
        },
        "year": 2021,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "Off the Track",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/off-the-track/regular/small.jpg",
            "medium": "../assets/thumbnails/off-the-track/regular/medium.jpg",
            "large": "../assets/thumbnails/off-the-track/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "Whispering Hill",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/whispering-hill/regular/small.jpg",
            "medium": "../assets/thumbnails/whispering-hill/regular/medium.jpg",
            "large": "../assets/thumbnails/whispering-hill/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "112",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/112/regular/small.jpg",
            "medium": "../assets/thumbnails/112/regular/medium.jpg",
            "large": "../assets/thumbnails/112/regular/large.jpg"
          }
        },
        "year": 2013,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Lone Heart",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/lone-heart/regular/small.jpg",
            "medium": "../assets/thumbnails/lone-heart/regular/medium.jpg",
            "large": "../assets/thumbnails/lone-heart/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "Production Line",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/production-line/regular/small.jpg",
            "medium": "../assets/thumbnails/production-line/regular/medium.jpg",
            "large": "../assets/thumbnails/production-line/regular/large.jpg"
          }
        },
        "year": 2018,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Dogs",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/dogs/regular/small.jpg",
            "medium": "../assets/thumbnails/dogs/regular/medium.jpg",
            "large": "../assets/thumbnails/dogs/regular/large.jpg"
          }
        },
        "year": 2016,
        "category": "TV Series",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "Asia in 24 Days",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/asia-in-24-days/regular/small.jpg",
            "medium": "../assets/thumbnails/asia-in-24-days/regular/medium.jpg",
            "large": "../assets/thumbnails/asia-in-24-days/regular/large.jpg"
          }
        },
        "year": 2020,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "The Tasty Tour",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/the-tasty-tour/regular/small.jpg",
            "medium": "../assets/thumbnails/the-tasty-tour/regular/medium.jpg",
            "large": "../assets/thumbnails/the-tasty-tour/regular/large.jpg"
          }
        },
        "year": 2016,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Darker",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/darker/regular/small.jpg",
            "medium": "../assets/thumbnails/darker/regular/medium.jpg",
            "large": "../assets/thumbnails/darker/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false
      },
      {
        "title": "Unresolved Cases",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/unresolved-cases/regular/small.jpg",
            "medium": "../assets/thumbnails/unresolved-cases/regular/medium.jpg",
            "large": "../assets/thumbnails/unresolved-cases/regular/large.jpg"
          }
        },
        "year": 2018,
        "category": "TV Series",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false
      },
      {
        "title": "Mission: Saturn",
        "thumbnail": {
          "regular": {
            "small": "../assets/thumbnails/mission-saturn/regular/small.jpg",
            "medium": "../assets/thumbnails/mission-saturn/regular/medium.jpg",
            "large": "../assets/thumbnails/mission-saturn/regular/large.jpg"
          }
        },
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false
      }
    ]

</script>

<template>
    <section class="relative flex flex-col pr-4 gap-y-3">
        <h3 class="text-[2rem] font-light text-[#fff]">Recommended for you</h3>
        <div class="grid grid-cols-4 text-white gap-y-[2rem]  children:rounded-[0.5rem]">
            <div v-for="(item,index) in movieList" :key="index" class="flex flex-col gap-y-1">
                <div class="flex w-full">
                  <img :src="item.thumbnail.regular.small" class=" relative w-[20rem] h-[10.9125rem] rounded-[0.5rem] object-cover z-0"/>
                  <div class="relative top-6 right-10 w-9 h-8 rounded-full bg-vulcan hover:bg-white bg-opacity-40 z-[999] flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-5 cursor-pointer hover:stroke-vulcan" :class="item.isBookmarked ? 'stroke-none fill-white': 'stroke-white fill-none'">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>  
                  </div>
                </div>
                <div class=" flex flex-col  top-[18.5rem]">
                    <div class="flex gap-2 opacity-75 text-[0.8125rem] font-light items-center">
                        <span>{{ item.year }}</span>
                        <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                        <span v-if="item.category === 'Movie'">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer stroke-white hover:stroke-sunsetorange">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                          </svg>                  
                        </span>
                        <span v-else-if="item.category === 'TV Series'">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer stroke-[#fff] hover:stroke-sunsetorange">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                          </svg>
                        </span>
                        <span>{{ item.category }}</span>
                        <span class="bg-[#fff] rounded-full w-[0.19rem] h-[0.19rem]"></span>
                        <span>{{ item.rating }}</span>
                    </div>
                    <h3 class="text-[1.125rem] font-medium">{{ item.title }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>