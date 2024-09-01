using Serenity.Navigation;
using MyPages = Serene5.Maps.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationLink(1001, "GoogleMaps", typeof(MyPages.GooglePage))]
