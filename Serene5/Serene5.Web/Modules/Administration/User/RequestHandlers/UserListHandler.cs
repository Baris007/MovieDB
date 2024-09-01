using MyRequest = Serene5.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene5.Administration.UserRow>;
using MyRow = Serene5.Administration.UserRow;

namespace Serene5.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}