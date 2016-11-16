<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- Added to <head> of page --%>
<asp:Content ID="PlaceHolderAdditionalPageHead" runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
	<link href="/_layouts/15/1033/styles/searchv15.css" rel="Stylesheet" type="text/css" />
	<link href="../Content/Results.css" rel="stylesheet" type="text/css" />
</asp:Content>

<%-- The page title --%>
<asp:Content ID="PlaceHolderPageTitle" runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
	Contact Results
</asp:Content>

<%-- Page title area --%>
<asp:Content ID="PlaceHolderPageTitleInTitleArea" runat="server" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea">
</asp:Content>

<%-- Search area (small search box at top right) --%>
<asp:Content ID="PlaceHolderSearchArea" runat="server" ContentPlaceHolderID="PlaceHolderSearchArea">
</asp:Content>

<%-- The left sidebar --%>
<asp:Content ID="PlaceHolderLeftNavBar" runat="server" ContentPlaceHolderID="PlaceHolderLeftNavBar">
	<div id="searchIcon">
		<SharePoint:SPSimpleSiteLink ID="onetidProjectPropertyTitleGraphic" runat="server" CssClass="ms-siteicon-a">
			<SharePoint:SiteLogoImage CssClass="ms-siteicon-img" name="onetidHeadbnnr0" id="onetidHeadbnnr2" LogoImageUrl="/_layouts/15/images/siteIcon.png" runat="server"/>
		</SharePoint:SPSimpleSiteLink>
	</div>
	<div class="ms-searchCenter-refinement">
		<WebPartPages:WebPartZone
			ID="NavigationZone"
			runat="server"
			AllowPersonalization="false"
			FrameType="TitleBarOnly"
			Orientation="Vertical"
			QuickAdd-GroupNames="Search"
			QuickAdd-ShowListsAndLibraries="false"
			Title="<%$Resources:Microsoft.Office.Server.Search,LayoutPageZone_NavigationZone%>">
		</WebPartPages:WebPartZone>
	</div>
</asp:Content>

<%-- The main area --%>
<asp:Content ID="PlaceHolderMain" runat="server" ContentPlaceHolderID="PlaceHolderMain">
	<div class="ms-searchCenter-result-main">
		<WebPartPages:WebPartZone
			ID="MainZone"
			runat="server"
			AllowPersonalization="false"
			FrameType="TitleBarOnly"
			Orientation="Vertical"
			QuickAdd-GroupNames="Search"
			QuickAdd-ShowListsAndLibraries="false"
			Title="<%$Resources:Microsoft.Office.Server.Search,LayoutPageZone_MainZone%>">
		</WebPartPages:WebPartZone>
	</div>
</asp:Content>
