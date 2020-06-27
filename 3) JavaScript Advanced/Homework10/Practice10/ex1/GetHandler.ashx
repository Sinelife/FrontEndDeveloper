<%@ WebHandler Language="C#" Class="GetHandler" %>

using System;
using System.Web;

public class GetHandler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "application/json";

        string login = context.Request.QueryString["login"];
        string password = context.Request.QueryString["password"];
        context.Response.Write("{\"login\":\"" + login + "\", \"password\":\"" + password +"\"}");
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}