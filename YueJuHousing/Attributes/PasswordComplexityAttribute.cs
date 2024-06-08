using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace YueJuHousing.Attributes
{
    public class PasswordComplexityAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value is string password)
            {
                bool hasLowerCase = Regex.IsMatch(password, @"[a-z]");
                bool hasUpperCase = Regex.IsMatch(password, @"[A-Z]");
                bool hasNonAlphanumeric = Regex.IsMatch(password, @"[\W_]");

                if (!hasLowerCase || !hasUpperCase || !hasNonAlphanumeric)
                {
                    string errorMessage = "密碼必須包含：\n";
                    if (!hasLowerCase)
                    {
                        errorMessage += "- 至少一個小寫字母 ('a'-'z')\n";
                    }
                    if (!hasUpperCase)
                    {
                        errorMessage += "- 至少一個大寫字母 ('A'-'Z')\n";
                    }
                    if (!hasNonAlphanumeric)
                    {
                        errorMessage += "- 至少一個非字母數字字符\n";
                    }
                    return new ValidationResult(errorMessage.TrimEnd());
                }
            }

            return ValidationResult.Success;
        }
    }
}