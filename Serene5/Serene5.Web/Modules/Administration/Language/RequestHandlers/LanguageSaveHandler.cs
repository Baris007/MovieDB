using MyRequest = Serenity.Services.SaveRequest<Serene5.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene5.Administration.LanguageRow;


namespace Serene5.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}