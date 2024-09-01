using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Serene5.MovieDB.MovieRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene5.MovieDB.MovieRow;

namespace Serene5.MovieDB;

public interface IMovieSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class MovieSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieSaveHandler
{
    public MovieSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}