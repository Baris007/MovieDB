using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Serene5.MovieDB.MovieGenresRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene5.MovieDB.MovieGenresRow;

namespace Serene5.MovieDB;

public interface IMovieGenresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class MovieGenresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresSaveHandler
{
    public MovieGenresSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}