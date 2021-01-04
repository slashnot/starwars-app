const imgs = [
    'https://thumbs.dreamstime.com/b/dwarf-planet-pluto-view-space-nebula-image-elements-furnished-nasa-169195080.jpg',
    'https://thumbs.dreamstime.com/b/view-planet-venus-space-space-nebula-planet-venus-image-elements-furnished-nasa-planet-venus-169195063.jpg',
    'https://thumbs.dreamstime.com/b/deep-space-beauty-planet-orbit-view-146253467.jpg',
    'https://thumbs.dreamstime.com/b/surreal-alien-planet-world-moon-landscape-background-blue-sky-mountains-comprise-scene-flat-rock-ground-110149102.jpg',
    'https://thumbs.dreamstime.com/b/exploding-planet-abstract-apocalyptic-background-burning-earth-red-sky-hell-end-world-elements-image-furnished-35856806.jpg',
    'https://thumbs.dreamstime.com/b/ice-planet-14353320.jpg',
    'https://thumbs.dreamstime.com/b/artist-view-mars-planet-solar-system-169612233.jpg',
    'https://thumbs.dreamstime.com/b/planet-earth-sunrise-space-background-31956828.jpg',
    'https://thumbs.dreamstime.com/b/global-world-space-blue-planet-earth-some-clouds-stars-dark-sky-elements-image-furnished-nasa-47583238.jpg',
    'https://thumbs.dreamstime.com/b/planet-venus-view-space-nebula-image-elements-furnished-nasa-170641484.jpg',
    'https://thumbs.dreamstime.com/b/red-planet-arid-landscape-rocky-hills-mountains-red-planet-arid-landscape-rocky-hills-mountains-giant-mars-142593598.jpg',
    'https://thumbs.dreamstime.com/b/mercury-planet-dark-sky-background-elements-image-furnished-nasa-mercury-planet-mixed-media-117042021.jpg',
    'https://thumbs.dreamstime.com/b/alien-planet-concept-ultra-violet-yellow-desert-landscape-112994943.jpg',
    'https://thumbs.dreamstime.com/b/lonely-dry-trees-desert-against-beautiful-red-yellow-sky-clouds-artistic-natural-image-alien-planet-concept-climate-106953568.jpg',
    'https://thumbs.dreamstime.com/b/pluto-planet-mixed-media-space-elemeents-image-furhished-nasa-129997666.jpg',
    'https://thumbs.dreamstime.com/b/artist-view-saturn-s-moon-titan-planet-solar-system-171578689.jpg',
    'https://thumbs.dreamstime.com/b/shot-neptune-taken-open-space-collage-colorful-picture-represents-its-moons-elements-image-furnished-nasa-59735302.jpg',
    'https://thumbs.dreamstime.com/b/incredibly-beautiful-space-wallpaper-elements-image-furnished-nasa-realistic-mercury-planet-solar-system-educational-102817666.jpg',
    'https://thumbs.dreamstime.com/b/lonely-dry-tree-desert-against-sun-iran-persia-lonely-dry-tree-desert-against-sun-iran-persia-122254342.jpg',
    'https://thumbs.dreamstime.com/b/planet-uranus-view-space-nebula-image-elements-furnished-nasa-169194994.jpg',
    'https://thumbs.dreamstime.com/b/surreal-alien-planet-world-moon-landscape-background-blue-sky-mountains-comprise-scene-flat-rock-ground-110149492.jpg',
    'https://cdn.spacetelescope.org/archives/images/newsfeature/heic2021a.jpg',
    'https://cdn.mos.cms.futurecdn.net/uxyTQorrAz7z8KcVZzPjDe.jpg',
    'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/planet_1280p.jpg?itok=07tueTM9',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkSSjINcbaKJQuwoXnywOJXgtdQUvCk64DA&usqp=CAU',
    'https://humanityplus.files.wordpress.com/2017/06/hd-planet_115144536_310.jpg?w=816',
    'https://i.imgur.com/9AODMk4.jpg',
    'https://i.pinimg.com/originals/0d/39/f7/0d39f7d95cd379404cfdf8935c0e9101.jpg',
    'https://s2.best-wallpaper.net/wallpaper/1920x1080/1107/Through-two-red-planet_1920x1080.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNVI2jtIWO9buka_OuJahvJUtS_3QtCqzMw&usqp=CAU',
    'https://s2.best-wallpaper.net/wallpaper/1024x768/1111/Fly-to-the-Red-Planet_1024x768.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmYsYQRRc1Bwb7lYwLjikFhZl94xfEqf17A&usqp=CAU',
    'https://i.imgur.com/R62tEAO.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttEYukBSTTIGcHJYpsGyPUry0_QciCGKWjQ&usqp=CAU',
    'https://www.wallpaperup.com/uploads/wallpapers/2015/04/13/660303/78ba87c7aa34505b2cf1ea15a531e679-700.jpg',
    'https://astronomy.com/~/media/8447168CD4894202B64C9B6A2F6F3631.jpg',
    'https://carnegiescience.edu/sites/carnegiescience.edu/files/Planet%20X%20Concept%20Art_CarnegieDTM_Cropped.jpg',
    'https://cdn.images.express.co.uk/img/dynamic/151/590x/Planet-nine-discovery-planet-9-proof-solar-system-ninth-planet-space-news-1103564.jpg?r=1553251892054',
    'https://exoplanets.nasa.gov/system/news_items/main_images/1543_main_image.jpg',
    'https://s.w-x.co/util/image/w/in-planet_0.jpg?v=at&w=1280&h=720',
    'https://www.kids-world-travel-guide.com/images/xvenus_shutterstock-2.jpg.pagespeed.ic.99unPchCc-.jpg',
    'https://scitechdaily.com/images/White-Dwarf-Star-With-Planet.jpg',
    'https://images.newscientist.com/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small.jpg?width=600',
    'https://wtamu.edu/~cbaird/sq/images/browndwarf.jpg',
    'https://earthsky.org/upl/2020/11/K2-141b-lava-planet-artist-concept-e1604960312378.jpg',
    'https://static.scientificamerican.com/sciam/cache/file/17822D90-26C5-410A-B426CD426DD9D189_source.jpg',
    'https://static01.nyt.com/images/2020/09/14/science/14SCI-VENUS1-alt/14SCI-VENUS1-alt-superJumbo.jpg',
    'https://scitechdaily.com/images/Iridescent-Mercury.jpg',
    'https://i.dailymail.co.uk/1s/2019/09/11/15/18352380-0-image-a-13_1568213885311.jpg',
    'https://static.scientificamerican.com/sciam/cache/file/EBBB2777-7D13-49F4-86C8B885E76C7FB7_source.png',
] 

export default imgs