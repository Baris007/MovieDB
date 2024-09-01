using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Serene5.MovieDB.GenreRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene5.MovieDB.GenreRow;

namespace Serene5.MovieDB;

public interface IGenreSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class GenreSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGenreSaveHandler
{
    public GenreSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}