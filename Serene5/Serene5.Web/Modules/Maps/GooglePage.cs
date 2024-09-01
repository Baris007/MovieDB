using Microsoft.AspNetCore.Mvc;
using Serene5.Maps;
using Serene5.MovieDB;
using Serenity.Web;

namespace Serene5.Maps.Pages;

public class GooglePage : Controller
{

    [Route("/GoogleIndex")]
    public ActionResult Index()
    {

        return View(MVC.Views.Maps.GoogleIndex);
    }
}