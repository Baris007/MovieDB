using Serenity.Services;
using MyRequest = Serene5.MovieDB.MovieListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene5.MovieDB.MovieRow>;
using MyRow = Serene5.MovieDB.MovieRow;

namespace Serene5.MovieDB;

public interface IMovieListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class MovieListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieListHandler
{
    public MovieListHandler(IRequestContext context)
            : base(context)
    {
    }
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (!Request.Genres.IsEmptyOrNull())
        {
            var fld = MyRow.Fields;
            var mg = MovieGenresRow.Fields.As("mg");

            query.Where(Criteria.Exists(
                query.SubQuery()
                    .From(mg)
                    .Select("1")
                    .Where(
                        mg.MovieId == fld.MovieId &&
                        mg.GenreId.In(Request.Genres))));
        }
    }
}