using Microsoft.AspNetCore.Identity;

namespace YueJuHousing.Services
{
    public class CustomIdentityErrorDescriber : IdentityErrorDescriber
    {
        public override IdentityError DuplicateUserName(string userName)
        {
            return new IdentityError
            {
                Code = nameof(DuplicateUserName),
                Description = $"帳號 '{userName}' 已被使用。"
            };
        }
    }
}
