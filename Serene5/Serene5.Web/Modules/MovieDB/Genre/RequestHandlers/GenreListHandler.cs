using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene5.MovieDB.GenreRow>;
using MyRow = Serene5.MovieDB.GenreRow;

namespace Serene5.MovieDB;

public interface IGenreListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class GenreListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGenreListHandler
{
    public GenreListHandler(IRequestContext context)
            : base(context)
    {
    }
}