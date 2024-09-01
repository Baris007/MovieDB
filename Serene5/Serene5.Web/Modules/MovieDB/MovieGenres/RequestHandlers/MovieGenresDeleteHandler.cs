using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene5.MovieDB.MovieGenresRow;

namespace Serene5.MovieDB;

public interface IMovieGenresDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class MovieGenresDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresDeleteHandler
{
    public MovieGenresDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}