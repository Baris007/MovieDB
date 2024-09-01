using Serenity.Navigation;
using MyPages = Serene5.MovieDB.Pages;

[assembly: NavigationMenu(6000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(6100, "Movie Database/Movies",
    typeof(MyPages.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(6200, "Movie Database/Genres", typeof(MyPages.GenrePage), icon: "fa-thumb-tack")]
[assembly: NavigationLink(int.MaxValue, "MovieDB/Movie Genres", typeof(MyPages.MovieGenresPage), icon: null)]