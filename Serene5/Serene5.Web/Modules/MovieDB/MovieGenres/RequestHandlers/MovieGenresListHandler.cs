using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene5.MovieDB.MovieGenresRow>;
using MyRow = Serene5.MovieDB.MovieGenresRow;

namespace Serene5.MovieDB;

public interface IMovieGenresListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class MovieGenresListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresListHandler
{
    public MovieGenresListHandler(IRequestContext context)
            : base(context)
    {
    }
}