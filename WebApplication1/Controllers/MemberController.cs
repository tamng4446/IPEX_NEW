using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using System.Web.UI.WebControls;
using Umbraco.Core.Composing;
using Umbraco.Core.Models;
using Umbraco.Web.Mvc;
using WebApplication1.Manager;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class MemberController : SurfaceController
    {
        // GET: Member
        [ChildActionOnly]
        public ActionResult MemberRegistration()
        {
            return PartialView("MemberRegistration", new RegisterModel());
        }
        [ChildActionOnly]
        public ActionResult MemberLogin()
        {
            return PartialView("MemberLogin", new LoginModel());
        }
        [HttpPost]
      
        public ActionResult SubmitLogin(LoginModel model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                if (Membership.ValidateUser(model.Username, model.Password))
                {
                    FormsAuthentication.SetAuthCookie(model.Username, false);
                    UrlHelper urlHelper = new UrlHelper(HttpContext.Request.RequestContext);
                    if (urlHelper.IsLocalUrl(returnUrl))
                        return Redirect(returnUrl);
                    else
                        return Redirect("/");
                }
                else
                {
                    ModelState.AddModelError("", "The username or password in invalid");
                }
            }
            return CurrentUmbracoPage();
        }
        [HttpPost]
       
        public ActionResult SubmitRegistration(RegisterModel model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                if (!Ultil.IsMemberExist(model.Email))
                {
                    IMember newMember = Current.Services.MemberService.CreateMember(model.Email, model.Email, model.Name, "Member");
                    try
                    {
                        Current.Services.MemberService.Save(newMember);
                        Current.Services.MemberService.SavePassword(newMember, model.Password);
                        Current.Services.MemberService.AssignRole(newMember.Id, "IPE Group");
                        if (newMember.Id > 0)

                            return Redirect("/Login");
                        else
                            return CurrentUmbracoPage();

                    }
                    catch (Exception ex)
                    {

                    }
                }
            }
            return CurrentUmbracoPage();
        }
    }
}