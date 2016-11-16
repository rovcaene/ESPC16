<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>


<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
  <WebPartPages:AllowFraming ID="AllowFraming" runat="server" />
  <link href="../Content/App.Part.css" rel="stylesheet" />
  <link href="../_catalogs/masterpage/Display%20Templates/ESPC/Content%20Web%20Parts/style/bootstrap.min.css" rel="stylesheet" />
  <link href="../_catalogs/masterpage/Display%20Templates/ESPC/Content%20Web%20Parts/style/font-awesome.min.css" rel="stylesheet" />
  <link href="../_catalogs/masterpage/Display%20Templates/ESPC/Content%20Web%20Parts/style/martial-cards.css" rel="stylesheet" />

  <script type="text/javascript" src="../Scripts/jquery-2.1.3.min.js"></script>
  <script type="text/javascript" src="../Scripts/App.Part.js"></script>
  <script type="text/javascript" src="../Scripts/App.Part.REST.js"></script>
  <script type="text/javascript" src="../_catalogs/masterpage/Display%20Templates/ESPC/Content%20Web%20Parts/js/Cards.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
  My Contacts
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
  <div id="container" class="container"></div>

  <script type="text/javascript">
    $(document).ready(
      function () {
        U2U.Part.init($('#container'));
        U2U.Part.loadData();
      })
  </script>
</asp:Content>