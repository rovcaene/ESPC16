<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
  <%-- X-Frame-Options for Add-in Part --%>
  <WebPartPages:AllowFraming runat="server" />

  <link rel="stylesheet" type="text/css" href="../Content/App.Part.css" />
  <script type="text/javascript" src="../Scripts/App.Part.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
  My Contacts
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
  <WebPartPages:WebPartZone runat="server" ID="Main" />

  <script type="text/javascript">
    U2U.Part.init();
  </script>
</asp:Content>