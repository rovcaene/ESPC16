<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
  <script type="text/javascript" src="../Scripts/jquery-2.1.3.min.js"></script>
  <SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
  <meta name="WebPartPageExpansion" content="full" />

  <!-- Add your CSS styles to the following file -->
  <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
  <link rel="Stylesheet" type="text/css" href="../Content/metro.css" />
  <link rel="Stylesheet" type="text/css" href="../Content/metro-colors.css" />

  <!-- Add your JavaScript to the following file -->
  <script type="text/javascript" src="../Scripts/App.js"></script>
  <script type="text/javascript" src="../Scripts/metro.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
  European SharePoint Conference 2016 - Search Add-in
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderLeftNavBar" runat="server">
  &nbsp;
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
  <div class="main">
    <div class="tile ribbed-cobalt">
      <a class="tile-content" href="ContactResults.aspx">
        <span class="tile-label fg-white uppercase text-bold text-enlarged">Contacts Result Page</span>
      </a>
    </div>
    <div class="tile-wide ribbed-amber">
      <a class="tile-content" href="MyContactsCSWP.aspx">
        <span class="tile-label fg-white uppercase text-bold text-enlarged">My Contacts<br /> Content Search Web Part</span>
      </a>
    </div>
    <div class="tile ribbed-darkViolet">
      <a class="tile-content" href="MyContactsREST.aspx">
        <span class="tile-label fg-white uppercase text-bold text-enlarged">My Contacts<br /> REST</span>
      </a>
    </div>
  </div>
</asp:Content>