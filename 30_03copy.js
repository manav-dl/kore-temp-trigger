This XML file does not appear to have any style information associated with it. The document tree is shown below.
<response>
<result>
<theme>
<footer/>
<header/>
</theme>
<containers>
<sys_id>6dce457d5b7212000d7ec7ad31f91af6</sys_id>
<bootstrap_alt>false</bootstrap_alt>
<subheader>true</subheader>
<background>{"background-size":"initial","background-position":"center center"}</background>
<width>container</width>
<container_class_name/>
<title/>
<rows>
<sys_id>d6ce457d5b7212000d7ec7ad31f91af9</sys_id>
<columns>
<sys_id>5ece457d5b7212000d7ec7ad31f91af9</sys_id>
<size_classes>col-md-8 </size_classes>
<widgets>
<sys_id>c7d3d8f2c34c6a90fe54f6ff050131ee</sys_id>
<widget>
<template><nav aria-label="Page breadcrumbs" role="navigation" class="breadcrumbs"> <ul class="nav nav-pills nav-sm"> <li ng-repeat="item in c.breadcrumbs track by $index"><span> <a ng-if="$index === 0" ng-href="{{item.url}}">{{item.label}}</a> <a ng-if="!$last &amp;&amp; $index !== 0" ng-href="{{item.url}}">{{item.label}}</a> <span class="a-disabled" ng-if="$last" aria-current="page"> <strong>{{item.label}}</strong> </span> <i aria-hidden="true" class="fa fa-chevron-right flip-icon-rtl" ng-if="!$last"></i> </span></li> </ul> </nav></template>
<css> .ve7e298f2c34c6a90fe54f6ff0501312c .nav { overflow: hidden; } .ve7e298f2c34c6a90fe54f6ff0501312c .nav li { padding: 10px 7px; } .ve7e298f2c34c6a90fe54f6ff0501312c .nav li > span > a { display: inline; } .ve7e298f2c34c6a90fe54f6ff0501312c .nav li > span > i { padding-left: 15px; } .ve7e298f2c34c6a90fe54f6ff0501312c .nav::before, .ve7e298f2c34c6a90fe54f6ff0501312c .nav::after { content: none; } .ve7e298f2c34c6a90fe54f6ff0501312c .a-disabled { cursor: default; color: #717171; font-weight: bold; }</css>
<data/>
<roles>snc_external,snc_internal</roles>
<link>function link(scope, element, attrs, controller) { }</link>
<rectangle_id>c7d3d8f2c34c6a90fe54f6ff050131ee</rectangle_id>
<_metastack_size>0</_metastack_size>
<option_schema/>
<sys_class_name>sp_widget</sys_class_name>
<sys_id>e7e298f2c34c6a90fe54f6ff0501312c</sys_id>
<public>true</public>
<client_script>function ($scope, $rootScope, spUtil, $location) { var c = this; c.expanded = !spUtil.isMobile(); c.expand = function () { c.expanded = true; }; var storedBreadcrumbs = localStorage.getItem("breadcrumbs"); $rootScope.breadcrumbs = storedBreadcrumbs ? JSON.parse(storedBreadcrumbs) : []; if ($rootScope.breadcrumbs.length === 0 || $rootScope.breadcrumbs[0].label !== "Home") { $rootScope.breadcrumbs.unshift({ label: "Home", url: "?id=" + $scope.portal.homepage_dv }); } var currentPage = { label: $scope.page.title, url: "?id=" + $scope.page.id }; var existingIndex = $rootScope.breadcrumbs.findIndex(b => b.label === currentPage.label); if (existingIndex === -1) { $rootScope.breadcrumbs.push(currentPage); } else { $rootScope.breadcrumbs = $rootScope.breadcrumbs.slice(0, existingIndex + 1); } localStorage.setItem("breadcrumbs", JSON.stringify($rootScope.breadcrumbs)); c.breadcrumbs = $rootScope.breadcrumbs; $rootScope.$broadcast("sp.update.breadcrumbs", c.breadcrumbs); } </client_script>
<name>Status Page Breadcrumbs</name>
<options>
<color>default</color>
<sp_column>5ece457d5b7212000d7ec7ad31f91af9</sp_column>
<sp_column_dv>1</sp_column_dv>
<active>true</active>
<color_dv>Default</color_dv>
<sys_tags/>
<sys_class_name>sp_instance</sys_class_name>
<size_dv>Medium</size_dv>
<sp_widget_dv>Status Page Breadcrumbs</sp_widget_dv>
<size>md</size>
<sp_widget>e7e298f2c34c6a90fe54f6ff0501312c</sp_widget>
<sys_class_name_dv>Instance</sys_class_name_dv>
<order>1</order>
</options>
<sys_scope>global</sys_scope>
<id>status_page_breadcrumbs</id>
<field_list/>
<controller_as>c</controller_as>
<_server_time>0.004</_server_time>
</widget>
<instance_id>c7d3d8f2c34c6a90fe54f6ff050131ee</instance_id>
<title/>
</widgets>
<class_name/>
<semantic_tag/>
<order>1</order>
</columns>
<columns>
<sys_id>d2ce457d5b7212000d7ec7ad31f91afa</sys_id>
<size_classes>col-md-4 </size_classes>
<class_name>kore-panel</class_name>
<semantic_tag/>
<order>2</order>
</columns>
<class_name/>
<semantic_tag/>
<order>1</order>
</rows>
<class_name>breadcrumbs-container</class_name>
<semantic_tag/>
<order>1</order>
</containers>
<containers>
<sys_id>d836b656d7330200a9addd173e24d452</sys_id>
<bootstrap_alt>false</bootstrap_alt>
<subheader>false</subheader>
<background>{"background-size":"initial","background-position":"center center"}</background>
<width>container</width>
<container_class_name/>
<title/>
<rows>
<sys_id>1036b656d7330200a9addd173e24d453</sys_id>
<columns>
<sys_id>5436b656d7330200a9addd173e24d453</sys_id>
<size_classes>col-md-12 </size_classes>
<widgets>
<sys_id>7137b272c3b05290fe54f6ff0501316d</sys_id>
<widget>
<template><div id="current_status_outage" ng-if="!data.service || data.outages.length > 0" class="panel panel-{{options.color}} b"> <div class="panel-heading"> <h3 class="panel-title">Outage<span ng-if="data.serviceDisplay"> - {{data.serviceDisplay}}</span></h3> </div> <div class="panel-body"> <div ng-if="!standalone &amp;&amp; !data.service" class="hidden-xs"> We constantly monitor our services and their related components. If there is ever a service interruption, a notification will be posted to this page. If you are experiencing problems not listed on this page, you can submit a request for service. </div> <div ng-if="data.outages.length == 0" class="col-xs-12 bs-callout bs-callout-success"> <div ng-if="!data.service"> No system is reporting an issue </div> </div> <div ng-if="data.outages.length > 0" ng-repeat="outage in c.getDisplayedOutages()" class="col-xs-12 bs-callout bs-callout-{{outage.type}}"><a ng-if="!data.service" style="color:inherit" ng-href="?id=service_status&amp;service={{outage.serviceID}}"> <!--{{outage.typeDisplay}} - {{outage.ci}} (started {{outage.begin}} --> <div style="padding-top: 10px"> {{outage.short_desc}} </div> <div ng-if="options.show_outage_details == 'true' &amp;&amp; outage.details" ng-bind-html="::trustAsHtml(outage.details)" class="sp-outage-details" style="padding-top: 10px"></div> </a> <span ng-if="data.service" style="color:inherit"> <!-- {{outage.typeDisplay}} - {{outage.ci}} (started {{outage.begin}}) --> <div style="padding-top: 10px"> {{outage.short_desc}} </div> <div ng-if="options.show_outage_details == 'true' &amp;&amp; outage.details" ng-bind-html="::trustAsHtml(outage.details)" class="sp-outage-details" style="padding-top: 10px"></div> </span> </div> <div class="pagination-controls" ng-if="data.totalCount > c.pageSize"><button class="btn btn-secondary" ng-click="c.prevPage()" ng-disabled="c.currentPage == 0">Previous</button> <span class="page-info">Page {{ c.currentPage + 1 }} of {{ data.totalPageCount }}</span> <button class="btn btn-secondary" ng-click="c.nextPage()" ng-disabled="(c.currentPage + 1) * c.pageSize >= data.totalCount">Next</button> </div> <div ng-if="::standalone"> <a href="?id=services_status" aria-label="More information, open current status page">More information...</a> </div> </div> </div></template>
<css> .vb9363e3ec3705290fe54f6ff0501316b .bs-callout { margin: 10px 0 !important; padding: 20px !important; border-left-style: solid; border-left-width: 10px; color: #3a3f51; } .vb9363e3ec3705290fe54f6ff0501316b .bs-callout-outage { background-color: #fdf7f7; border-color: #d9534f; } .vb9363e3ec3705290fe54f6ff0501316b .bs-callout-degradation { background-color: #fef9f3; border-color: #f0ad4e; } .vb9363e3ec3705290fe54f6ff0501316b .bs-callout-planned { background-color: #f0f9fc; border-color: #5bc0de; } .vb9363e3ec3705290fe54f6ff0501316b .bs-callout-success { background-color: #eaf6ea; border-color: #5cb85c; } .vb9363e3ec3705290fe54f6ff0501316b .tooltip-inner { width: 150px; } .vb9363e3ec3705290fe54f6ff0501316b div.sp-outage-details { margin-bottom: -10px; }</css>
<data>
<service>cb4ae2ca479f0610ab11f92c016d43f1</service>
<outages>
<typeDisplay>Outage</typeDisplay>
<ci>Super SIM</ci>
<details><p><span style="font-family: verdana; font-size: 10pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services: </strong>Data connectivity.<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start: </strong>Sunday, March 30, 2025 23:40 UTC / Sunday, March 30, 2025 19:40 EST (UTC-4)<br /><strong>End:</strong> TBD<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description: </strong>Since 23:40 UTC we are experiencing Super SIM connectivity issues. Our engineering team is actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. <br /><br /><strong><span style="color: #e67e23;">UPDATE 1</span> 2025-03-31 01:23 UTC / 2025-03-30 21:23 EST (UTC-5)</strong>: Since 23:40 UTC, we have been investigating an issue affecting Super SIM devices, where some may experience failures when attempting to establish data connections. Beginning around 00:25 UTC, we began to see some increase in the number of devices connected and exchanging data; however, the number of devices exchanging data is only ~45% of the pre-incident levels.<br />Our team is actively working to identify the cause of the disruption. Our carrier partners are also actively investigating the issue. We will provide the next update in 1 hour or sooner as more information becomes available.<br /></span></p></details>
<short_desc>Super SIM connectivity issues - 2025-03-30</short_desc>
<type>outage</type>
<serviceID>cb4ae2ca479f0610ab11f92c016d43f1</serviceID>
<begin>30/03/2025 19:40:00</begin>
</outages>
<totalPageCount>1</totalPageCount>
<totalCount>1</totalCount>
<serviceDisplay>Super SIM</serviceDisplay>
<outageIDs>,0a9a2ea683e06a50dbeac410feaad358</outageIDs>
</data>
<roles/>
<link>function link(scope, element, attrs, controller) { }</link>
<rectangle_id>7137b272c3b05290fe54f6ff0501316d</rectangle_id>
<_metastack_size>0</_metastack_size>
<option_schema>[{"hint":"Display details from the cmdb_ci_outage record","name":"show_outage_details","section":"Presentation","label":"Show outage details","type":"boolean"},{"hint":"Omit explanatory information","name":"standalone","section":"Presentation","label":"Standalone","type":"boolean"},{"hint":"List of sys_class_name values (comma separated)","name":"sys_class_list","section":"Data","default_value":"cmdb_ci_service","label":"Class List","type":"string"}]</option_schema>
<sys_class_name>sp_widget</sys_class_name>
<sys_id>b9363e3ec3705290fe54f6ff0501316b</sys_id>
<public>true</public>
<client_script>function($scope, spUtil, snRecordWatcher, $rootScope, $sce, $timeout, $location, $document) { var c = this; $scope.standalone = $scope.options.standalone == 'true' || $scope.options.standalone == true; var q = "cmdb_ci.sys_class_name=cmdb_ci_service"; if ($scope.data.outageIDs != "") q += "^NQsys_idIN" + $scope.data.outageIDs; spUtil.recordWatch($scope, "cmdb_ci_outage", q, function() { $scope.server.update(); $rootScope.$broadcast("sp.outage.updated"); }); $scope.trustAsHtml = function(html) { return $sce.trustAsHtml(html); }; c.pageSize = 5; c.currentPage = 0; c.getDisplayedOutages = function() { var start = c.currentPage * c.pageSize; return c.data.outages.slice(start, start + c.pageSize); }; c.nextPage = function() { if ((c.currentPage + 1) * c.pageSize < c.data.totalCount) { c.currentPage++; } }; c.prevPage = function() { if (c.currentPage > 0) { c.currentPage--; } }; $scope.$on('sp.outage.updated', function() { c.currentPage = 0; }); c.checkForHash = function() { var hash = $location.hash(); if (hash) { c.scrollTo(hash); } }; $timeout(function() { c.checkForHash(); }, 100); } </client_script>
<name>Current Status - Outage</name>
<options>
<show_outage_details>true</show_outage_details>
<css> #x7137b272c3b05290fe54f6ff0501316d .panel-title:before { border-radius: .2rem; color: #fff; content: "\f011"; font-family: FontAwesome; font-size: 1.8rem; margin-right: .5rem; padding: .2rem .3rem; } #x7137b272c3b05290fe54f6ff0501316d .panel-title { align-items: center; background-color: #9bcb4c; border-radius: 4px 0; color: $text-color-light; display: flex; flex-direction: row; font-size: 1.6rem; font-weight: 400; padding: 1rem 1.5rem; text-transform: capitalize; width: max-content; } #x7137b272c3b05290fe54f6ff0501316d .bs-callout-success { background-color: tint($brand-accent, 90%); border-color: $brand-accent; }</css>
<color>default</color>
<widget_parameters>{ "show_outage_details": { "value": "true", "displayValue": "true" }, "standalone": { "value": "", "displayValue": "" }, "sys_class_list": { "value": "", "displayValue": "" } }</widget_parameters>
<sp_column>5436b656d7330200a9addd173e24d453</sp_column>
<sp_column_dv>1</sp_column_dv>
<standalone/>
<active>true</active>
<color_dv>Default</color_dv>
<sys_tags/>
<sys_class_name>sp_instance</sys_class_name>
<size_dv>Medium</size_dv>
<sp_widget_dv>Current Status - Outage</sp_widget_dv>
<size>md</size>
<sys_class_list>cmdb_ci_service</sys_class_list>
<sp_widget>b9363e3ec3705290fe54f6ff0501316b</sp_widget>
<sys_class_name_dv>Instance</sys_class_name_dv>
<order>1</order>
</options>
<sys_scope>global</sys_scope>
<id>current_status_outage</id>
<field_list/>
<controller_as>c</controller_as>
<_server_time>0.008</_server_time>
</widget>
<instance_id>7137b272c3b05290fe54f6ff0501316d</instance_id>
<title/>
</widgets>
<widgets>
<sys_id>a40f3a7ac3f05290fe54f6ff05013104</sys_id>
<widget>
<template><div id="current_status_degradation" ng-if="!data.service || data.outages.length > 0" class="panel panel-{{options.color}} b"> <div class="panel-heading"> <h3 class="panel-title">Degradation<span ng-if="data.serviceDisplay"> - {{data.serviceDisplay}}</span></h3> </div> <div class="panel-body"> <div ng-if="!standalone &amp;&amp; !data.service" class="hidden-xs"> We constantly monitor our services and their related components. If there is ever a service interruption, a notification will be posted to this page. If you are experiencing problems not listed on this page, you can submit a request for service. </div> <div ng-if="data.outages.length == 0" class="col-xs-12 bs-callout bs-callout-success"> <div ng-if="!data.service"> No system is reporting an issue </div> </div> <div ng-if="data.outages.length > 0" ng-repeat="outage in c.getDisplayedOutages()" class="col-xs-12 bs-callout bs-callout-{{outage.type}}"><a ng-if="!data.service" style="color:inherit" ng-href="?id=service_status&amp;service={{outage.serviceID}}"> <!-- {{outage.typeDisplay}} - {{outage.ci}} (started {{outage.begin}}) --> <div style="padding-top: 10px"> {{outage.short_desc}} </div> <div ng-if="options.show_outage_details == 'true' &amp;&amp; outage.details" ng-bind-html="::trustAsHtml(outage.details)" class="sp-outage-details" style="padding-top: 10px"></div> </a> <span ng-if="data.service" style="color:inherit"> <!-- {{outage.typeDisplay}} - {{outage.ci}} (started {{outage.begin}}) --> <div style="padding-top: 10px"> {{outage.short_desc}} </div> <div ng-if="options.show_outage_details == 'true' &amp;&amp; outage.details" ng-bind-html="::trustAsHtml(outage.details)" class="sp-outage-details" style="padding-top: 10px"></div> </span> </div> <div class="pagination-controls" ng-if="data.totalCount > c.pageSize"><button class="btn btn-secondary" ng-click="c.prevPage()" ng-disabled="c.currentPage == 0">Previous</button> <span class="page-info">Page {{ c.currentPage + 1 }} of {{ data.totalPageCount }}</span> <button class="btn btn-secondary" ng-click="c.nextPage()" ng-disabled="(c.currentPage + 1) * c.pageSize >= data.totalCount">Next</button> </div> <div ng-if="::standalone"> <a href="?id=services_status" aria-label="More information, open current status page">More information...</a> </div> </div> </div></template>
<css> .vedae36b6c3f05290fe54f6ff05013151 .bs-callout { margin: 10px 0 !important; padding: 20px !important; border-left-style: solid; border-left-width: 10px; color: #3a3f51; } .vedae36b6c3f05290fe54f6ff05013151 .bs-callout-outage { background-color: #fdf7f7; border-color: #d9534f; } .vedae36b6c3f05290fe54f6ff05013151 .bs-callout-degradation { background-color: #fef9f3; border-color: #f0ad4e; } .vedae36b6c3f05290fe54f6ff05013151 .bs-callout-planned { background-color: #f0f9fc; border-color: #5bc0de; } .vedae36b6c3f05290fe54f6ff05013151 .bs-callout-success { background-color: #eaf6ea; border-color: #5cb85c; } .vedae36b6c3f05290fe54f6ff05013151 .tooltip-inner { width: 150px; } .vedae36b6c3f05290fe54f6ff05013151 div.sp-outage-details { margin-bottom: -10px; }</css>
<data>
<service>cb4ae2ca479f0610ab11f92c016d43f1</service>
<totalPageCount>0</totalPageCount>
<totalCount>0</totalCount>
<serviceDisplay>Super SIM</serviceDisplay>
<outageIDs/>
</data>
<roles/>
<link>function link(scope, element, attrs, controller) { }</link>
<rectangle_id>a40f3a7ac3f05290fe54f6ff05013104</rectangle_id>
<_metastack_size>0</_metastack_size>
<option_schema>[{"hint":"Display details from the cmdb_ci_outage record","name":"show_outage_details","section":"Presentation","label":"Show outage details","type":"boolean"},{"hint":"Omit explanatory information","name":"standalone","section":"Presentation","label":"Standalone","type":"boolean"},{"hint":"List of sys_class_name values (comma separated)","name":"sys_class_list","section":"Data","default_value":"cmdb_ci_service","label":"Class List","type":"string"}]</option_schema>
<sys_class_name>sp_widget</sys_class_name>
<sys_id>edae36b6c3f05290fe54f6ff05013151</sys_id>
<public>true</public>
<client_script>function($scope, spUtil, snRecordWatcher, $rootScope, $sce, $timeout, $location, $document) { var c = this; $scope.standalone = $scope.options.standalone == 'true' || $scope.options.standalone == true; var q = "cmdb_ci.sys_class_name=cmdb_ci_service"; if ($scope.data.outageIDs != "") q += "^NQsys_idIN" + $scope.data.outageIDs; spUtil.recordWatch($scope, "cmdb_ci_outage", q, function() { $scope.server.update(); $rootScope.$broadcast("sp.outage.updated"); }); $scope.trustAsHtml = function(html) { return $sce.trustAsHtml(html); }; c.pageSize = 5; c.currentPage = 0; c.getDisplayedOutages = function() { var start = c.currentPage * c.pageSize; return c.data.outages.slice(start, start + c.pageSize); }; c.nextPage = function() { if ((c.currentPage + 1) * c.pageSize < c.data.totalCount) { c.currentPage++; } }; c.prevPage = function() { if (c.currentPage > 0) { c.currentPage--; } }; c.scrollTo = function(eID) { var $el = $document[0].getElementById(eID); if ($el) { $timeout(function() { $el.scrollIntoView({ behavior: "smooth" }); }, 50); } }; c.checkForHash = function() { var hash = $location.hash(); if (hash) { c.scrollTo(hash); } }; $timeout(function() { c.checkForHash(); }, 100); } </client_script>
<name>Current Status - Degradation</name>
<options>
<show_outage_details>true</show_outage_details>
<css> #xa40f3a7ac3f05290fe54f6ff05013104 .panel-title:before { border-radius: .2rem; color: #fff; content: "\f011"; font-family: FontAwesome; font-size: 1.8rem; margin-right: .5rem; padding: .2rem .3rem; } #xa40f3a7ac3f05290fe54f6ff05013104 .panel-title { align-items: center; background-color: #9bcb4c; border-radius: 4px 0; color: $text-color-light; display: flex; flex-direction: row; font-size: 1.6rem; font-weight: 400; padding: 1rem 1.5rem; text-transform: capitalize; width: max-content; } #xa40f3a7ac3f05290fe54f6ff05013104 .bs-callout-success { background-color: tint($brand-accent, 90%); border-color: $brand-accent; }</css>
<color>default</color>
<roles/>
<widget_parameters>{ "show_outage_details": { "value": "true", "displayValue": "true" }, "standalone": { "value": "", "displayValue": "" }, "sys_class_list": { "value": "", "displayValue": "" } }</widget_parameters>
<sp_column>5436b656d7330200a9addd173e24d453</sp_column>
<sp_column_dv>1</sp_column_dv>
<standalone/>
<active>true</active>
<color_dv>Default</color_dv>
<sys_tags/>
<sys_class_name>sp_instance</sys_class_name>
<size_dv>Medium</size_dv>
<sp_widget_dv>Current Status - Degradation</sp_widget_dv>
<size>md</size>
<sys_class_list>cmdb_ci_service</sys_class_list>
<sp_widget>edae36b6c3f05290fe54f6ff05013151</sp_widget>
<sys_class_name_dv>Instance</sys_class_name_dv>
<order>2</order>
</options>
<sys_scope>global</sys_scope>
<id>current_status_degradation</id>
<field_list/>
<controller_as>c</controller_as>
<_server_time>0.005</_server_time>
</widget>
<instance_id>a40f3a7ac3f05290fe54f6ff05013104</instance_id>
<title/>
</widgets>
<widgets>
<sys_id>23ea6c12c3305a50fe54f6ff05013183</sys_id>
<widget>
<template><div id="planned_maintenance_with_details" ng-if="!data.service || data.outages.length > 0" class="panel panel-{{options.color}} b"> <div class="panel-heading"> <h2 class="panel-title">Maintenance<span ng-if="data.serviceDisplay"> - {{data.serviceDisplay}}</span></h2> </div> <div class="panel-body"> <div ng-if="!data.service"> We publish information on planned service availability below. This includes events occurring over the next 5 days. </div> <div ng-if="data.outages.length == 0" class="col-xs-12 bs-callout bs-callout-success"> No service maintenance is planned over the next 5 days </div> <div ng-if="data.outages.length > 0" ng-repeat="outage in c.getDisplayedOutages()" class="col-xs-12 bs-callout bs-callout-{{outage.type}}"><!-- <a ng-if="!data.service" style="color:inherit" ng-href="?id=service_status&service={{outage.serviceID}}"> Planned maintenance - {{outage.ci}}, Start {{outage.begin}}, End {{outage.end}}) <div style="padding-top: 10px">{{outage.short_desc}}</div> </a> --> <span ng-if="data.service" style="color:inherit"> <!--${Planned maintenance - {{outage.ci}}, ${service will be unavailable {{outage.begin}} to {{outage.end}}) --> <div style="padding-top: 10px"> {{outage.short_desc}} </div> <div ng-if="options.show_outage_details == 'true' &amp;&amp; outage.details" ng-bind-html="::trustAsHtml(outage.details)" class="sp-outage-details" style="padding-top: 10px"></div> </span> </div> <div class="pagination-controls" ng-if="data.totalCount > c.pageSize"><button class="btn btn-secondary" ng-click="c.prevPage()" ng-disabled="c.currentPage == 0">Previous</button> <span class="page-info">Page {{ c.currentPage + 1 }} of {{ data.totalPageCount }}</span> <button class="btn btn-secondary" ng-click="c.nextPage()" ng-disabled="(c.currentPage + 1) * c.pageSize >= data.totalCount">Next</button> </div> </div> </div></template>
<css> .v9fb6b56847f8d210ab11f92c016d434c .bs-callout { margin: 10px 0 !important; padding: 20px !important; border-left-style: solid; border-left-width: 10px; color: #3a3f51; } .v9fb6b56847f8d210ab11f92c016d434c .bs-callout-outage { background-color: #fdf7f7; border-color: #d9534f; } .v9fb6b56847f8d210ab11f92c016d434c .bs-callout-degradation { background-color: #fef9f3; border-color: #f0ad4e; } .v9fb6b56847f8d210ab11f92c016d434c .bs-callout-planned { background-color: #f0f9fc; border-color: #5bc0de; } .v9fb6b56847f8d210ab11f92c016d434c .bs-callout-success { background-color: #eaf6ea; border-color: #5cb85c; } .v9fb6b56847f8d210ab11f92c016d434c .tooltip-inner { width: 150px; } .v9fb6b56847f8d210ab11f92c016d434c div.sp-outage-details { margin-bottom: -10px; }</css>
<data>
<service>cb4ae2ca479f0610ab11f92c016d43f1</service>
<totalPageCount>0</totalPageCount>
<totalCount>0</totalCount>
<serviceDisplay>Super SIM</serviceDisplay>
<outageIDs/>
</data>
<roles/>
<link>function link(scope, element, attrs, controller) { }</link>
<rectangle_id>23ea6c12c3305a50fe54f6ff05013183</rectangle_id>
<_metastack_size>0</_metastack_size>
<option_schema>[{"hint":"Display details from the cmdb_ci_outage record","name":"show_outage_details","section":"Presentation","label":"Show outage details","type":"boolean"},{"hint":"List of sys_class_name values (comma separated)","name":"sys_class_list","section":"Data","default_value":"cmdb_ci_service","label":"Class List","type":"string"}]</option_schema>
<sys_class_name>sp_widget</sys_class_name>
<sys_id>9fb6b56847f8d210ab11f92c016d434c</sys_id>
<public>true</public>
<client_script>function($scope, spUtil, snRecordWatcher, $rootScope, $sce, $timeout, $location, $document) { var c = this; var q = "cmdb_ci.sys_class_name=cmdb_ci_service"; if ($scope.data.outageIDs != "") q += "^NQsys_idIN" + $scope.data.outageIDs; spUtil.recordWatch($scope, "cmdb_ci_outage", q, function() { $scope.server.update(); $rootScope.$broadcast("sp.outage.updated"); }); $scope.trustAsHtml = function(html) { return $sce.trustAsHtml(html); }; c.pageSize = 5; c.currentPage = 0; c.getDisplayedOutages = function() { var start = c.currentPage * c.pageSize; return c.data.outages.slice(start, start + c.pageSize); }; c.nextPage = function() { if ((c.currentPage + 1) * c.pageSize < c.data.totalCount) { c.currentPage++; } }; c.prevPage = function() { if (c.currentPage > 0) { c.currentPage--; } }; c.scrollTo = function(eID) { var $el = $document[0].getElementById(eID); if ($el) { $timeout(function() { $el.scrollIntoView({ behavior: "smooth" }); }, 50); } }; c.checkForHash = function() { var hash = $location.hash(); if (hash) { c.scrollTo(hash); } }; $timeout(function() { c.checkForHash(); }, 100); } </client_script>
<name>Planned Maintenance With Details</name>
<options>
<show_outage_details>true</show_outage_details>
<css> #x23ea6c12c3305a50fe54f6ff05013183 .panel-title:before { border-radius: .2rem; color: #fff; content: "\f0ad"; font-family: FontAwesome; font-size: 1.8rem; margin-right: .5rem; padding: .2rem .3rem; } #x23ea6c12c3305a50fe54f6ff05013183 .panel-title { align-items: center; background-color: #9bcb4c; border-radius: 4px 0; color: $text-color-light; display: flex; flex-direction: row; font-size: 1.6rem; font-weight: 400; padding: 1rem 1.5rem; text-transform: none; width: max-content; } #x23ea6c12c3305a50fe54f6ff05013183 .bs-callout-success { background-color: tint($brand-accent, 90%); border-color: $brand-accent; }</css>
<color>default</color>
<roles/>
<widget_parameters>{ "show_outage_details": { "value": "true", "displayValue": "true" }, "sys_class_list": { "value": "", "displayValue": "" } }</widget_parameters>
<sp_column>5436b656d7330200a9addd173e24d453</sp_column>
<sp_column_dv>1</sp_column_dv>
<active>true</active>
<color_dv>Default</color_dv>
<title>Planned Maintenance with details</title>
<sys_tags/>
<sys_class_name>sp_instance</sys_class_name>
<size_dv>Medium</size_dv>
<sp_widget_dv>Planned Maintenance With Details</sp_widget_dv>
<size>md</size>
<sys_name>Planned Maintenance with details</sys_name>
<sys_class_list>cmdb_ci_service</sys_class_list>
<sp_widget>9fb6b56847f8d210ab11f92c016d434c</sp_widget>
<sys_class_name_dv>Instance</sys_class_name_dv>
<order>3</order>
</options>
<sys_scope>global</sys_scope>
<id>planned_maintenance_with_details</id>
<field_list/>
<controller_as>c</controller_as>
<_server_time>0.007</_server_time>
</widget>
<instance_id>23ea6c12c3305a50fe54f6ff05013183</instance_id>
<title>Planned Maintenance with details</title>
</widgets>
<class_name>kore-panel</class_name>
<semantic_tag/>
<order>1</order>
</columns>
<class_name/>
<semantic_tag/>
<order>1</order>
</rows>
<rows>
<sys_id>10e90614d7111200a9addd173e24d470</sys_id>
<columns>
<sys_id>48f98214d7111200a9addd173e24d47c</sys_id>
<size_classes>col-md-9 </size_classes>
<widgets>
<sys_id>24288f14470c9690ab11f92c016d43b2</sys_id>
<widget>
<template><div ng-if="data.service" class="panel panel-{{options.color}} b"> <div class="panel-heading"> <h4 class="panel-title">Service History - {{::data.serviceName}}</h4> </div> <div class="panel-body"> <div ng-if="data.outages.length"> From most recent to oldest, this list shows all outages, degradations and planned maintenance for this service </div> <div ng-if="!data.outages.length"> No past issues have been recorded for this service </div> <ul class="outages" ng-if="data.outages.length > 0"> <li class="timeline-item" ng-repeat="e in c.getDisplayedOutages()"> <div class="bs-callout bs-callout-{{e.typeValue}}"> <div class="timeline-heading"> <h4 class="timeline-title">{{::e.summary}}</h4> <small class="text-muted"> <span class="glyphicon glyphicon-time"></span> <sn-time-ago timestamp="::e.beginValue"></sn-time-ago> <div> Started {{e.beginDisplay}}<span ng-if="e.duration">, Duration {{e.duration}}</span> </div> </small> <a class="info-link more-info" href="javascript:void(0)" ng-click="c.openPopup(e.details, e.summary)" aria-label="More Information">More Information</a> </div> </div></li> </ul> <div class="pagination-controls" ng-if="data.totalCount > c.pageSize"><button class="btn btn-secondary" ng-click="c.prevPage()" ng-disabled="c.currentPage == 0">Previous</button> <span class="page-info">Page {{ c.currentPage + 1 }} of {{ data.totalPageCount }}</span> <button class="btn btn-secondary" ng-click="c.nextPage()" ng-disabled="(c.currentPage + 1) * c.pageSize >= data.totalCount">Next</button> </div> <div class="modal fade" id="detailsModal" tabindex="-1" role="dialog" aria-labelledby="detailsModalLabel" aria-hidden="true"> <div class="modal-dialog modal-lg modal-dialog-centered" role="document"> <div class="modal-content"> <div class="modal-header"> <h4 class="modal-title" id="detailsModalLabel"><strong>{{c.summary}}</strong></h4> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button> </div> <!-- Ensure the modal body is correctly bound to c.modalDetails --> <div class="modal-body" ng-bind-html="c.modalDetails"></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> </div> </div> </div> </div> </div> </div></template>
<css> .v6a268f9847c89690ab11f92c016d43bc .outages { list-style-type: none; padding-left: 0px; } .v6a268f9847c89690ab11f92c016d43bc .bs-callout { margin: 10px 0 !important; padding: 20px !important; border-left-style: solid; border-left-width: 10px; } .v6a268f9847c89690ab11f92c016d43bc .bs-callout-outage { background-color: #fdf7f7; border-color: #d9534f; } .v6a268f9847c89690ab11f92c016d43bc .bs-callout-degradation { background-color: #fcf8f2; border-color: #b06d0f; } .v6a268f9847c89690ab11f92c016d43bc .bs-callout-planned { background-color: #f4f8fa; border-color: #28a1c5; } .v6a268f9847c89690ab11f92c016d43bc .bs-callout-success { background-color: #ebf1e8; border-color: #3d8b3d; } .v6a268f9847c89690ab11f92c016d43bc .tooltip-inner { width: 150px; } .v6a268f9847c89690ab11f92c016d43bc .info-link.more-info { display: block; margin-top: 10px; color: blue; }</css>
<data>
<service>cb4ae2ca479f0610ab11f92c016d43f1</service>
<outages>
<duration>4 Hours 6 Minutes</duration>
<summary>Super SIM connectivity issues - 2025-03-27</summary>
<beginDisplay>27/03/2025 09:09:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 10pt;"><strong><span style="color: #e67e23;">Who</span></strong><br /><strong>Impacted Customer Solutions: </strong>Super SIM <br /><strong>Impacted Services:</strong> Data connectivity.<br /> <br /><strong><span style="color: #e67e23;">When</span></strong><br /><strong>Start:</strong> Thursday, March 27, 2025 13:09 UTC / Thursday, March 27, 2025 09:09 EST (UTC-4)<br /><strong>End:</strong> Thursday, March 27, 2025 17:15 UTC / Thursday, March 27, 2025 13:15 EST (UTC-4)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 13:09 UTC we are investigating an issue where devices may experience failures when attempting to connect. We are actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.   <br /><br /><span style="color: #e67e23;"><strong>RESOLUTION: </strong></span>As of 17:15 UTC, we have observed recovery of the network connectivity issue affecting Super SIM devices. Connectivity rates have returned to normal levels, and impacted devices are now able to attach and update mobility without significant delays.<br />We will continue to monitor the situation to ensure service stability. If you have devices that are still not reconnecting, please try sending a <strong>&#34;Reset Connectivity&#34;</strong> command from the Super SIM console for a few SIMs to prompt them to re-register to the network.<br /><br /><strong><span style="color: #e67e23;">UPDATE 2 </span>2025-03-27 17:59 UTC / 2025-03-27 13:59 EST (UTC-5): </strong>Since around 16:30 UTC, we have observed significant recovery of the network connectivity issue affecting mobility updates and/or new attachments due to a loss of Diameter connectivity with one of our partners. While connectivity rates have improved, full recovery has not yet been achieved. Our partner is still experiencing network congestion, which may result in continued delays for some impacted devices. Devices may face throttling, denials, or require multiple retries to establish connectivity.<br />We are continuing to monitor for service stability and will provide another update if more information becomes available.<br /><br /><strong><span style="color: #e67e23;">UPDATE 1</span></strong> <strong>2025-03-27 16:59 UTC / 2025-03-27 12:59 EST (UTC-4):</strong> Since 13:09 UTC, we have been investigating an issue affecting devices using Super SIM, where some may experience failures with mobility updates and/or new attachments due to a loss of Diameter connectivity with one of our partners.<br />The root cause of the issue has been identified, and connectivity rates are improving. Over the past 45 minutes, we have observed an increase in successful data sessions. However, our partner is still experiencing network congestion, which is preventing normal operations. Impacted devices may connect with significant delays, face throttling, or require multiple retries to establish connectivity.<br />Our team is actively working with our partner to fully restore service. We will provide the next update in 1 hour or sooner as more information becomes available.</span></p></details>
<beginValue>2025-03-27 13:09:00</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0176678 - Planned Maintenance - Network Migration - 2025-03-26 - CANCELLED</summary>
<beginDisplay>26/03/2025 04:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 26, 2025, 08:30 UTC / Wednesday, March 26, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Wednesday, March 26, 2025, 16:00 UTC / Wednesday, March 26, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p> </p></details>
<beginValue>2025-03-26 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0176654 - Planned Maintenance - Network Migration - 2025-03-24</summary>
<beginDisplay>24/03/2025 04:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 24, 2025, 08:30 UTC / Monday, March 24, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Monday, March 24, 2025, 16:00 UTC / Monday, March 24, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p> </p></details>
<beginValue>2025-03-24 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0175883 - Planned Maintenance - Network Migration - Super SIM - 2025-03-19</summary>
<beginDisplay>19/03/2025 04:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 19, 2025, 08:30 UTC / Wednesday, March 19, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Wednesday, March 19, 2025, 16:00 UTC / Wednesday, March 19, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description</strong>: KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></details>
<beginValue>2025-03-19 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0175456 - Planned Maintenance - Network Migration - Super SIM - 2025-03-17</summary>
<beginDisplay>17/03/2025 04:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 17, 2025, 08:30 UTC / Monday, March 17, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Monday, March 17, 2025, 16:00 UTC / Monday, March 17, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></details>
<beginValue>2025-03-17 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0172839 - Planned Maintenance - Super SIM - Network Migration - 2025-03-13</summary>
<beginDisplay>13/03/2025 04:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p>Dear Valued Customer,<br /><br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Thursday, March 13, 2025, 08:30 UTC / Thursday, March 13, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Thursday, March 13, 2025, 16:00 UTC / Thursday, March 13, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></details>
<beginValue>2025-03-13 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0172808 - Planned Maintenance - Network Migration - 2025-03-12</summary>
<beginDisplay>12/03/2025 04:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p>Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 12, 2025, 08:30 UTC / Wednesday, March 12, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Wednesday, March 12, 2025, 16:00 UTC / Wednesday, March 12, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></details>
<beginValue>2025-03-12 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0172620 - Planned Maintenance - Network Migration - 2025-03-10</summary>
<beginDisplay>10/03/2025 04:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p>Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 10, 2025, 08:30 UTC / Monday, March 10, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Monday, March 10, 2025, 16:00 UTC / Monday, March 10, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></details>
<beginValue>2025-03-10 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>3 Hours 16 Minutes</duration>
<summary>Super SIM Usage Results Inconsistencies - 2025-03-04</summary>
<beginDisplay>05/03/2025 11:55:53</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 10pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Super SIM Usage and Billing<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Tuesday, March 4, 2025 22:00 UTC / Tuesday, March 4, 2025 17:00 EST (UTC-5)<br /><strong>End:</strong> Wednesday, March 5, 2025 17:51 UTC / Wednesday, March 5, 2025 12:51 EST (UTC-5) <br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description</strong>: On-call engineers are investigating reports of discrepancies in results from the Super SIM /Usage Records APIs and results shown in Data Insights in Console. It appears that in some cases, empty results are being returned. We&#39;ll provide update in 1 hour or as new information is found. <br /><br /></span></p> <p><span style="font-size: 10pt;"><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> On March 3rd, our team deployed a patch that introduced an issue for requests with <code>granularity&#61;all</code>. Specifically, when the requested data range was exactly one day, the system returned an empty response.</span></p> <p><strong><span style="font-size: 10pt;">Example request parameters:</span></strong></p> <ul style="list-style-position: inside;"><li style="font-size: 10pt;"><span style="font-size: 10pt;">StartTime: 2025-02-20T00:00:00.000Z</span></li><li style="font-size: 10pt;"><span style="font-size: 10pt;">EndTime: 2025-02-21T00:00:00.000Z</span></li></ul> <p><span style="font-size: 10pt;">We continue to observe stability after our engineering team remedied the issues. The system is now operating as expected, and we are confident that this issue has been resolved.</span></p> <p><span style="font-size: 10pt;">If your requests follow this pattern (granularity&#61;all with a one-day range), please verify your data and update it if needed.<br /><br /></span></p> <p><span style="font-family: verdana; font-size: 10pt;"> <br /><strong><span style="color: #e67e23;">UPDATE 1</span> 2025-03-05 17:55 UTC / 2025-03-05 12:55 EST (UTC-5):</strong> Our engineering team has deployed a change in how usage results are calculated and are continuing to test. We will provide another update within the next hour or sooner as new information becomes available. <br /></span></p></details>
<beginValue>2025-03-05 16:55:53</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0171954 - Planned Maintenance - Network Migration - 2025-03-05</summary>
<beginDisplay>05/03/2025 03:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;">Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 05, 2025, 08:30 UTC / Wednesday, March 05, 2025, 03:30 EST (UTC-5)<br /><strong>End:</strong> Wednesday, March 05, 2025, 16:00 UTC / Wednesday, March 05, 2025, 11:00 EST (UTC-5)<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</span></p> <p><span style="font-family: verdana; font-size: 8pt;">Should you experience any problems that may be related to the maintenance, please submit a ticket. </span></p></details>
<beginValue>2025-03-05 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>7 Hours 30 Minutes</duration>
<summary>KORE Case CS0170128 - Planned Maintenance - Network Migration - 2025-03-03</summary>
<beginDisplay>03/03/2025 03:30:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;">Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.<br /></span></p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 03, 2025, 08:30 UTC / Monday, March 03, 2025, 03:30 EST (UTC-5)<br /><strong>End:</strong> Monday, March 03, 2025, 16:00 UTC / Monday, March 03, 2025, 11:00 EST (UTC-5) </p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.<br /><br />Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></details>
<beginValue>2025-03-03 08:30:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>2 Hours 58 Minutes</duration>
<summary>Super SIM UsageRecords Returning Incorrect Results for Some Requests</summary>
<beginDisplay>28/02/2025 16:40:05</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Super SIM usage and billing</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Thursday, February 27, 2025, 11:00 UTC / Thursday, February 27, 2025, 06:00 EST (UTC-5)<br /><strong>End:</strong> Friday, February 28, 2025, 18:00 UTC / Friday, February 28, 2025, 13:00 EST (UTC-5)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Beginning around 11:00 UTC / 06:00 EST (UTC-5) on February 27, 2025, the Super SIM UsageRecord API was returning incorrect results for requests with the Granularity parameter set to &#34;all&#34;, which is the default value for it. If requests were made with a StartTime that was not UTC midnight (e.g. 01:30 UTC), the first entire day was excluded from the results as the start time was rounded up to the nearest UTC day. Depending on the range of your request, you could have received empty results.</p> <p>Our engineering team remedied the issue and results are now being returned that are properly in line with the /UsageRecords API documentation. The issue was resolved around 18:00 UTC / 13:00 EST (UTC-5) on February 28, 2025.</p> <p>If you retrieved usage data during this period from the /UsageRecords API, you may need to rerun your processes with the corrected results.<br /><br />Our engineers are continuing to monitor the situation and will post an update in 1 hour.</p> <p><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> We continue to observe stability after our engineering team has remedied the issues and continues to operate as expected. We are confident that this issue is resolved.</p> <p> </p></details>
<beginValue>2025-02-28 21:40:05</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>9 Hours</duration>
<summary>KORE Case CS0169738 - Planned Maintenance - Network Migration - 2025-02-26</summary>
<beginDisplay>26/02/2025 02:00:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p>Dear Valued Customer,</p> <p>We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> <span>Wednesday, February 26, 2025, 07:00 UTC / Wednesday, February 26, 2025, 02:00 EST (UTC-5)</span><br /><strong>End:</strong> <span>Wednesday, February 26, 2025, 16:00 UTC / Wednesday, February 26, 2025, 11:00 EST (UTC-5)</span> </p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> <span>KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.<br /><br /></span><span>Should you experience any issues that may be related to the maintenance, please submit a ticket.</span> </p></details>
<beginValue>2025-02-26 07:00:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>2 Days 14 Hours 40 Minutes</duration>
<summary>KORE Case CS0169496 - Planned Maintenance - Network Migration - 2025-02-24</summary>
<beginDisplay>21/02/2025 16:20:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p>Dear Valued Customer,</p> <p>We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, February 24, 2025, 07:00 UTC / Monday, February 24, 2025, 02:00 EST (UTC-5)<br /><strong>End:</strong> Monday, February 24, 2025, 12:00 UTC / Monday, February 24, 2025, 07:00 EST (UTC-5)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any issues that may be related to the maintenance, please submit a ticket.</p></details>
<beginValue>2025-02-21 21:20:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>30 Minutes</duration>
<summary>Scheduled Maintenance for SUPER SIM </summary>
<beginDisplay>20/02/2025 03:00:00</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="font-family: verdana; font-size: 10pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> SUPER SIM<br /><strong>Impacted Services: </strong>Connectivity downtime for location updates, CLRs and SMS use cases<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong>  February 20th, 2025, 08:00 UTC / February 20th, 2025, 03:00 EST (UTC-5)<br /><strong>End:</strong>  February 20th, 2025, 08:30 UTC / February 20th, 2025, 03:30 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description: </strong>As part of the integration of Twilio&#39;s IoT business unit into KORE, we will be performing a scheduled Database migration on February 20th, 2025, between 08:00 UTC and 08:30 UTC. During this time, there may be a connectivity downtime for the SUPER SIM product. We anticipate the delay will not exceed 4 minutes and will strive to minimize it as much as possible. Please note, this maintenance will not affect connectivity for all customers but devices performing location updates, CLRs and SMS might be impacted during the maintenance window.</span></p></details>
<beginValue>2025-02-20 08:00:00</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>10 Days 5 Hours 35 Minutes</duration>
<summary>Super SIM Usage Reporting Errors</summary>
<beginDisplay>18/02/2025 11:29:48</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions: </strong>Super SIM<br /><strong>Impacted Services:</strong> Super SIM Usage Reporting</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Saturday, December 28, 2024 00:00 UTC / Friday, December 27, 2024 19:00 EST ( UTC-5)<br /><strong>End:</strong> Friday, February 28, 2025 09:45 UTC / Friday, February 28, 2025 04:45 EST (UTC-5)</p> <p><strong><span style="color: #e67e23;">What</span></strong><br /><strong>Description:</strong> We have identified errors in the amount of data usage reported in the Super SIM Console and from the Super SIM UsageRecords API. The period of impact appears to be between December 28, 2024 and January 29, 2025. Data usage reported from these tools does not reconcile to the original usage records. The issue appears to be with the usage aggregation and reporting system that powers these tools. The amounts charged to your invoice properly reconcile to the original usage records.</p> <p>As part of our migration from Twilio to KORE, we&#39;re migrating to a new usage and aggregation service operated by KORE. Due to the active migration, we do not expect to be able to fix the variances in the current usage reporting service. Our engineers and product are working on confirming that amounts in the new usage system properly reconcile to the amounts charged and accelerating the migration to the service so that you can get the correct amounts for the impacted period. We will provide an update in 24 hours.</p> <p><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> <span>Our engineering team concluded that the new data source is fully operational and stable across all endpoints. The incident is now resolved.</span> <br /><br /><strong><span style="color: #e67e23;">UPDATE 4</span> 2025-02-27 09:45 UTC / 2025-02-27 04:45 EST (UTC-5):</strong> Our Engineering team has successfully switched all remaining traffic to the new data source. As a result, the Console UI, KORE API, and Twilio API are now displaying accurate data. The team will continue monitoring the system for the next 24 hours before closing the incident.  <br /><br /><strong><span style="color: #e67e23;">UPDATE 3 <span style="color: #000000;">2025-02-26 08:30 UTC / 2025-02-26 03:30 EST (UTC-5): </span></span></strong><span style="color: #e67e23;"><span style="color: #000000;">Our engineering team has successfully switched the KORE Super SIM/UsageRecords API to our new data source that is returning the correct usage data for the impacted period. However, please note that the Twilio/UsageRecords API endpoint remains connected to the legacy data source containing the incorrect usage amounts for the impacted period. The legacy data will not be corrected. If you need to retrieve the corrected usage data for the impacted period for your application, you will need to migrate to the KORE/UsageRecords API. We will continue to monitor this situation and provide an update in 24 hours.</span></span><span style="color: #e67e23;"><span style="color: #000000;"> <br /><br /></span></span><strong><span style="color: #e67e23;">UPDATE 2</span> 2025-02-25 13:40 UTC / 2025-02-25 08:40 EST (UTC-5):</strong> Our engineering team is working to make the correct data available via the KORE Super SIM/UsageRecords API. This may be available as early as this week. We expect the corrected results to only be available through the KORE API endpoint, not from the Twilio Super SIM/UsageRecords API. This is due our ongoing infrastructure migration and related limitations. To retrieve the corrected information you may need to accelerate your API migration plan. We will provide further details once our resolution plan is finalized. We will provide another update in 24 hours. <br /><br /><strong><span style="color: #e67e23;">UPDATE 1</span> 2025-02-19 16:26 UTC / 2025-02-19 11:26 EST (UTC-5):</strong> For KORE Super SIM Console Data Insights, we have switched to using the new usage aggregation and reporting system. Results there should now reconcile to invoices. If you continue to see any variances, please contact KORE customer support. Requests to the UsageRecords API endpoint are still being handled by the previous system and may return variances for the impacted period noted earlier. Our team is continuing to work on the accelerated migration plan to switch all requests to the new system. We will provide another update in 24 hours. </p></details>
<beginValue>2025-02-18 16:29:48</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>6 Hours 19 Minutes</duration>
<summary>Super SIM connectivity issues 2025-02-11</summary>
<beginDisplay>11/02/2025 17:59:58</beginDisplay>
<typeValue>outage</typeValue>
<details><p><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM<br />Impacted Services: Data connectivity.</p> <p><strong><span style="color: #e67e23;">When</span></strong><br />Start: Tuesday, February 11, 2025 22:07 UTC / Tuesday, February 11, 2025 17:07 EST (UTC-5)</p> <p>End: Wednesday, February 12, 2025 05:00 UTC / Wednesday, February 12, 2025 00:00 EST (UTC-5)</p> <p><strong><span style="color: #e67e23;">What</span></strong><br />Description: Since 22:07 UTC we are investigating an issue where devices using Super SIM may experience connectivity issues (i.e.: failures to attach, increased latency). We are actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.</p> <p><span style="color: #e67e23;"><strong>RESOLUTION</strong></span>:Traffic between our system and the network has now returned to normal levels. Devices should no longer be experiencing frequent disconnections, and overall connectivity should be stable. The team will continue to monitor the situation closely, but the incident is considered resolved.</p> <p><strong><span style="color: #e67e23;"><br />UPDATE 6</span> 2025-02-12 04:22 UTC / 2025-02-11 23:22 EST (UTC-5)</strong>: KORE Engineers are closely monitoring the recovery process, as normal levels have yet to be fully restored. The team is actively working to resolve the issue, with ongoing collaboration with our connectivity partner. We will provide another update within the next hour or sooner, as more information becomes available.</p> <p><strong><span style="color: #e67e23;">UPDATE 5</span> 2025-02-12 03:22 UTC / 2025-02-11 22:22 EST (UTC-5)</strong>: KORE Engineers are still monitoring recovery progress, though traffic and sessions have not yet returned to normal levels. Ongoing collaboration with our connectivity partner will continue until the issue is fully resolved. Further updates will be shared within the next hour or sooner, as more information becomes available.<br /><strong><span style="color: #e67e23;"><br />UPDATE 4 </span>2025-02-12 02:22 UTC / 2025-02-11 21:22 EST ( UTC-5)</strong>: Since our last update, we are beginning to observe signs of recovery. Some devices that need to make new attachments or are highly mobile may experience connectivity failures or delays, established connections should be stable. KORE engineers are actively working with our connectivity partners to address the issue. We will provide another update within the next hour or sooner, as more information becomes available.<br /><strong><span style="color: #e67e23;"><br />UPDATE 3 </span>2025-02-12 01:22 UTC / 2025-02-11 20:22 EST ( UTC-5):</strong> KORE engineers are continuing to collaborate with our connectivity partners to resolve the issue. We are seeing stabilization of the traffic in some cases, and traffic for some IMSI ranges continues to be throttled to help recover the spikes on signaling from our upstream dependencies. An additional update will be provided within the next hour or sooner, as more information becomes available.<br /><br /><strong><span style="color: #e67e23;">UPDATE 2 </span>2025-02-12 00:22 UTC / 2025-02-11 19:22 EST( UTC-5):</strong> KORE engineers are continuing to collaborate with our connectivity partners to resolve the issue. Currently, traffic for some IMSI ranges might be throttled to help recover the spikes on signaling from our upstream dependencies. An additional update will be provided within the next hour or sooner, as more information becomes available.</p> <p><strong><span style="color: #e67e23;"><br />UPDATE 1</span> 2025-02-11 23:22 UTC / 2025-02-11 18:22 EST ( UTC-5)</strong> : The investigation into the incident affecting devices using Super SIM, leading to connectivity issues such as attachment failures and increased latency, is ongoing. We are collaborating with our connectivity partners to restore service. At its peak, approximately 70% of data sessions were lost, with some now having recovered. We will provide another update within an hour or sooner as more information becomes available.<br /><br /><br /></p></details>
<beginValue>2025-02-11 22:59:58</beginValue>
<type>Outage</type>
</outages>
<outages>
<duration>1 Hour 37 Minutes</duration>
<summary>Super SIM Connectivity Data Session Drop</summary>
<beginDisplay>05/02/2025 20:23:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Super SIM Connectivity Data Session Drop - RESOLUTION </strong></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Super SIM Connectivity<br /> <br /><strong>When</strong><br />Start: Thursday, February 06, 2025, 01:23 UTC / Wednesday, February 05, 2025, 20:23 EST (UTC-5)<br />End: Thursday, February 06, 2025, 03:00 UTC / Wednesday, February 05, 2025, 22:00 EST (UTC-5)</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> <br /><strong>What</strong><br /><strong>Description</strong>: Starting at 01:23 am/pm UTC we&#39;ve been experiencing Super SIM connectivity issues with one of our partners the region of Europe. We estimate approximately 3% of data sessions were dropped. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>RESOLUTION:</strong> <br />We are now seeing recovery of the network connectivity issue. There was a spike in traffic after a spiker maintenance window that was not expected to have impact. Metrics have normalized as of 02:40 UTC. We are continuing to monitor for service stability but consider the incident resolved.</p></details>
<beginValue>2025-02-06 01:23:00</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>2 Hours 55 Minutes</duration>
<summary>Super SIM Connectivity Delays Experienced Due To Need To Switch IMSI</summary>
<beginDisplay>30/01/2025 08:05:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Super SIM Connectivity Delays Experienced Due To Need To Switch IMSI<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Thursday, January 30, 2025 13:05 UTC / Thursday, January 30, 2025 08:05 EST (UTC-5)<br />End: Thursday, January 30, 2025 16:00 UTC / Thursday, January 30, 2025 11:00 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;"><strong>Description</strong></span>: Starting at 13:05 UTC Super SIM started experiencing connectivity issues with one of our partners that primarily services the European markets. Approximately 10% of data sessions in Europe were dropped, devices have been observed switching to another connectivity partner. 90% of data sessions have recovered. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong><br />Resolution<span style="color: #000000;">: </span></strong><span style="color: #000000;">The issue causing Super SIM connectivity failures has been addressed and services have recovered. Recovery started at 15:10 UTC and normalized at 16:00 UTC, we will continue to monitor for stability. We consider this incident resolved and Super SIM connected devices should be operating normally. </span><span style="color: #000000;"> </span></span></span></p> <p><br /><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Update 1 <span style="color: #000000;">Thursday, January 30, 2025 14:50 UTC / Thursday, January 30, 2025 09:50 EST (UTC-5)</span><span style="color: #000000;">:</span> </strong><span style="color: #000000;">Since 13:05 UTC we have been investigating an issue where devices using Super SIM may experience delays or failures to connect. We see some devices are switching to a different IMSI identity and able to reconnect. We are actively working to identify and resolve the issue. We will provide another update in 2 hours or sooner once more information becomes available.</span><strong>  </strong></span></span></p> <p> </p></details>
<beginValue>2025-01-30 13:05:00</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>2 Hours 2 Minutes</duration>
<summary>SuperSIM Connectivity Delays Experience</summary>
<beginDisplay>29/01/2025 18:17:31</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Super SIM Connectivity Delays Experience <br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Wednesday, January 29, 2025 23:17 UTC / Tuesday, January 29, 2025 18:17 EST (UTC-5)<br />End: Thursday, January 30, 2025 01:19 UTC / Tuesday, January 29, 2025 20:19 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;"><strong>Description</strong></span>: Starting at 23:17 UTC Super SIM started experiencing connectivity issues with one of our partners that primarily services the European markets. Approximately 25% of data sessions in Europe were dropped, devices have been observed switching to another connectivity partner. 70% of data sessions have recovered. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. <br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;"><br />RESOLUTION</span></strong>: The issue causing Super SIM connectivity delays has been addressed and services have recovered. The impacted connectivity metrics have returned to normal and we will be monitoring for stability. We consider this incident resolved and Super SIM connected devices should be operating normally.  </span></p></details>
<beginValue>2025-01-29 23:17:31</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>2 Hours 20 Minutes</duration>
<summary>New customer sign up and account linking issues</summary>
<beginDisplay>22/01/2025 15:36:33</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Signing up KORE Console and linking to Twilio Console <br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Wednesday, January 22, 2025 02:30 UTC / Tuesday, January 21, 2025 21:30 EST(UTC-5)<br />End: <span>Wednesday, January 22, 2025, 22:24 UTC / Wednesday, January 22, 2025, 17:24 EST (UTC-5)</span> <br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;"><strong>Description</strong></span>: We are investigating an issue where new users signing up for both Twilio and KORE are unable to verify that their accounts are linked. This is blocking them from advancing to ordering SIM hardware or managing their SIMs in the Twilio Console. This only impacts new users and has no impact on existing users&#39; ability to manage their SIMs and has no impact on connectivity.We will provide another update in 1 hour or sooner once more information becomes available.<br /><br /><br /><span><strong><span style="color: #e67e23;">RESOLUTION</span></strong>: We have identified an issue that caused a unique endpoint used to share information related to the account linking workflow to become unreachable. This resulted in the information available to the Twilio Console being out of date and prevented users from completing the verification step of the linking process. The issue has been resolved and users can again complete the KORE and Twilio account linking process. </span> <br /></span></p></details>
<beginValue>2025-01-22 20:36:33</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>11 Hours 57 Minutes</duration>
<summary>Super SIM Network Connectivity Issues</summary>
<beginDisplay>16/01/2025 09:35:02</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: 2G/3G/LTE data connections<br /> <br /><strong>When</strong><br />Start: Thursday, January 16, 2025  13:30 UTC / Thursday, January 16, 2025 08:30 EST (UTC-5)<br />End: Friday, January 17, 2025 02:25 UTC / Thursday, January 16, 2025 21:25 EST (UTC-5)<br /> <br /><strong>What</strong><br />Description: Since 13:30 UTC we are experiencing Super SIM connectivity issues with a number of devices starting their data connection repeatedly. Our engineering team is actively investigating to resolve the issue. Approximately 3% of connections have failed, with those devices still offline. We will provide another update in 1 hour or sooner once more information becomes available.<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">RESOLUTION:  </span></strong><span style="color: #000000;">As of 01:00 UTC, device connectivity for Super SIM is growing at a stable rate. We&#39;ll continue to monitor the devices as they reattach, at this time we are closing the incident. If you have devices that are still not reconnecting, please try sending a &#34;Reset Connectivity&#34; command from the Super SIM console for a few SIMs in the console to prompt them to re-register to the network. <br /></span><strong><span style="color: #e67e23;"><br />UPDATE 5</span> 2025-01-17 00:09 UTC / 2025-01-16 19:09 EST (UTC-5</strong>): We continue to see recovery of the network connectivity issue for Super SIM. Device data sessions continue to recover towards pre-incident levels. If you have devices that are not reconnecting, please try sending a Reset Connectivity for a few SIMs in the console to force them to register to the network again. We will provide another update in 4 hours or sooner once more information becomes available </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;"><br />UPDATE 4</span> 2025-01-16 21:41 UTC / 2025-01-16 16:41 EST (UTC-5)</strong>: As of 20:20 UTC, signaling traffic levels have returned to pre-incident levels. This typically indicates that devices attempting to reconnect should now be able to establish stable data sessions.Our engineering team continues to work closely with the affected network provider to fully resolve the issue. If any SIM cards are still experiencing connectivity problems, we recommend resetting their connectivity through the console, as this often helps re-establish a stable connection. We will provide another update in 2 hours or sooner if more information becomes available. </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;"><br />UPDATE 3</span> 2025-01-16 19:50 UTC / 2025-01-16 14:50 EST (UTC-5)</strong>: Engineers continue to investigate the cause of the Super SIM connectivity issue. At peak, approximately 28.9% of SIMs had their data sessions impacted. Those impacted devices may face increased reattachment attempts if they are always powered on, while devices with long sleep cycles may encounter difficulty attaching to the network during short connection attempts. We will provide another update within the next 4 hours or sooner as new information becomes available.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong><br />UPDATE 2</strong></span> <strong>2025-01-16 17:50 UTC / 2025-01-16 12:50 EST (UTC-5):</strong> Our engineering team continue to collaborate with the carrier partner to resolve the issue. Some devices using the IMSI from the affected partner may face increased reattachment attempts if they are always powered on, while devices with long sleep cycles may encounter difficulty attaching to the network during short connection attempts. We will provide another update within the next 2 hours or sooner as new information becomes available. </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>UPDATE 1</strong></span>: <strong>2025-01-16 15:47 UTC / 2025-01-16 10:47 EST (UTC-5)</strong>: Since 13:30 UTC, we have been experiencing Super SIM connectivity issues with one of our partners. Some devices using the IMSI from the affected partner may face increased reattachment attempts if they are always powered on, while devices with long sleep cycles may encounter difficulty attaching to the network during short connection attempts. Our engineering team is actively collaborating with the partner to resolve the issue. We will provide another update within the next 2 hours or sooner as new information becomes available.  <br /></span></p> <p> </p></details>
<beginValue>2025-01-16 14:35:02</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>4 Hours 8 Minutes</duration>
<summary>Devices using Super SIM may experience connectivity issues on 2G/3G networks</summary>
<beginDisplay>02/01/2025 10:05:53</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"> <span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> 2G/3G data connections<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Thursday, January 02, 2025  13:05 UTC / Thursday, January 02, 2025 08:05 EST (UTC-5)<br /><strong>End:</strong> Thursday, January 02, 2025  18:30 UTC / Thursday, January 02, 2025 13:30 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 13:05 UTC, we are investigating an issue where devices using Super SIM may experience failures with mobility updates and/or new attachments on 2G/3G networks due to a loss of SIGTRAN connectivity. 4G connections appear to be unaffected, and devices configured for 4G-only connections are likely operating normally. However, devices with voice-centric modem configurations may also experience failures. We are actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span><span style="color: #e67e23;"><strong>RESOLUTION </strong></span>: Device connectivity has been stable since the last update. At this time, we consider the issue resolved.</span> </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">UPDATE 2</span> 2025-01-02 18:10 UTC / 2025-01-02 13:10 EST (UTC-5)</strong>:Along with our partner, we have identified and mitigated the issue causing Super SIM 2G &amp; 3G connectivity to fail. Engineers are monitoring as devices recovery their connectivity. We will provide another update in 1 hour.<br /><strong><span style="color: #e67e23;"><br />UPDATE 1</span> 2025-01-02 15:58 UTC / 2025-01-02 10:58 EST (UTC-5)</strong>:The incident causing Super SIM 2G &amp; 3G connectivity issues with one of our partners is still being actively investigated by engineers. Devices that depend on 2G/3G connectivity will be unable to register or perform location updates and appear offline. We are adjusting our impact start time to be 13:05 UTC, 90 minutes earlier than previously stated. Our team is actively working to restore the service with our partner. We will provide another update in 2 hours or sooner once more information becomes available.<br /><br /><br /></span></p></details>
<beginValue>2025-01-02 15:05:53</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>50 Minutes</duration>
<summary>Super SIM Network Connectivity Issues 2024-12-27</summary>
<beginDisplay>27/12/2024 07:50:02</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Network Connectivity<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Friday, December 27, 2024  12:50 UTC / Friday, December 27, 2024  07:50  EST (UTC-5)<br /><strong>End:</strong> Friday, December 27, 2024  13:41 UTC / Friday, December 27, 2024  08:41  EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 12:50 pm UTC we are experiencing Super SIM connectivity issues. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.  </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span><strong><span style="color: #e67e23;">RESOLUTION: </span></strong>Between 12:50 and 13:41 UTC today, the Super SIM product experienced a higher than normal signaling traffic from the mobile networks in what is known a signaling storm. Such an event can delay signaling causing data sessions to fail. At this time we do not consider there to be any additional impact to customer devices. It appears the root cause of this event was on our partners networks and we are working with them to identify possible improvements</span> </span></p></details>
<beginValue>2024-12-27 12:50:02</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>4 Hours 59 Minutes</duration>
<summary>Super SIM Network Connectivity Issues 2024-12-23</summary>
<beginDisplay>23/12/2024 09:38:40</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"> <span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Network Connectivity<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, December 23, 2024  13:20 UTC / Monday, December 23, 2024, 08:20 EST (UTC-5)<br /><strong>End:</strong> Monday, December 23, 2024 17:50 UTC / Monday, December 23, 2024, 12:50 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 01:20 PM UTC, we are experiencing Super SIM connectivity issues. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">RESOLUTION: </span></strong><span style="color: #000000;">Device connectivity has been stable since the last update. At this time, we consider the issue resolved. </span></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">UPDATE 2</span> 2024-12-23 18:10 UTC / 2024-12-23 13:10 EST (UTC-5) :</strong>The issue causing Super SIM connectivity issues has been identified. An increase in traffic caused an issue with latency within our platform. Services were scaled up and traffic started to return to normal. We are monitoring services and connectivity as systems recover. We&#39;ll post a resolution in an hour or two so long as things stay stable.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">UPDATE 1</span> 2024-12-23 15:28 UTC  / 2024-12-23 10:28 EST (UTC-5)</strong> : Since 1:20 PM UTC we are experiencing Super SIM connectivity issues primarily in the EU region. Some customer devices may be experiencing failures when trying to attach to the network. Additionally, devices that are mobile and may change their registration location would failure to perform procedures needed to update their location. Impacted devices would lose their data connectivity. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hours or sooner once more information becomes available.</span></p></details>
<beginValue>2024-12-23 14:38:40</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>8 Hours 49 Minutes</duration>
<summary>Scheduled Maintenance for Programmable Wireless – Usage and Billing Reports Delays</summary>
<beginDisplay>13/12/2024 02:10:46</beginDisplay>
<typeValue>planned</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>WHO</strong></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">Impacted Customer Solutions: Programmable Wireless Customers<br />Impacted Services: Usage and Billing Reports Delays</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>When</strong><br />Start: Friday, December 13, 2024, 06:00 UTC / Friday, December 13, 2024, 01:00 EST (UTC-5)<br />End:  Friday, December 13, 2024, 16:00 UTC / Friday, December 13, 2024, 11:00 EST (UTC-5) <br /> <br /><strong>What</strong><br />Description: As part of the integration of Twilio&#39;s IoT business unit into KORE, we will be performing a scheduled migration of several services on Friday, December 13, 2024, between 06:00 UTC and 16:00 UTC. During this time, there may be a delay in data usage reports for the Programmable Wireless SIM product. We anticipate the delay will not exceed 3 hours and will strive to minimize it as much as possible. Please note, this maintenance will not affect connectivity. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p></details>
<beginValue>2024-12-13 07:10:46</beginValue>
<type>Maintenance</type>
</outages>
<outages>
<duration>3 Hours 28 Minutes</duration>
<summary>INC0142394 - Outage - SUPERSIM and Programmable Wireless 2024-12-11</summary>
<beginDisplay>11/12/2024 01:19:25</beginDisplay>
<typeValue>outage</typeValue>
<details><p> </p> <p><span style="color: #e67e23;"><strong>WHO</strong></span></p> <p>Impacted Customer Solutions: Super SIM and Programmable Wireless Customers<br />Impacted Services: Access to Super SIM UI and delays with usage and billing reporting and Programmable Wireless Provisioning</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Wednesday, December 11, 2024 05:30 UTC / Wednesday, December 11, 2024 00:30 EST ( UTC-5)<br />End:  Wednesday, December 11, 2024 09:32 UTC / Wednesday, December 11, 2024 04:32 EST ( UTC-5) <br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br />Description: Beginning at 05:30 UTC, customers will experience issues as indicated below: <br />For super sim: Customers will face issues accessing the Super SIM UI, and experience delays with usage and billing reporting <br />For Programmable Wireless customers may encounter delays in provisioning activities </p> <p>We will provide another update once more information becomes available.<br /><br /></p> <p><span style="color: #e67e23;"><strong>RESOLUTION</strong></span>:Service outage has been resolved and services have been fully restored. KORE engineers monitored and confirmed network stability.</p> <p><strong><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 2</span> 2024-12-11 08:30 UTC / 2024-12-11 03:30 EST (UTC-5)</span>:</strong> Our network engineering team is still actively investigating the ongoing issue with high priority.We will continue to keep you informed as soon as more information becomes available.</p> <p><strong><span style="color: #e67e23;">UPDATE 1 </span>2024-12-11 07:34 UTC / 2024-12-11 02:34 EST (UTC-5):</strong>Our network engineering team has confirmed an ongoing issue with the Internet Bandwidth and DCI business services. Further information will be shared as the investigation progresses. </p> <p> </p> <p> </p></details>
<beginValue>2024-12-11 06:19:25</beginValue>
<type>Outage</type>
</outages>
<outages>
<duration>2 Hours 5 Minutes</duration>
<summary>Drop in Data Sessions with Super SIM - 2024-12-04</summary>
<beginDisplay>04/12/2024 01:14:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"> <br /><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Network Connectivity<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, December 04, 2024, 06:14 UTC / Wednesday, December 04, 2024, 01:14 EST (UTC-5)<br /><strong>End:</strong> Wednesday, December 04, 2024, 08:19 UTC / Wednesday, December 04, 2024, 03:19 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Beginning at 06:14am UTC, we began experiencing a 5.5% drop in data sessions with Super SIM. Devices may encounter a delay when attempting to establish a connection during this time. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 2 hours or sooner if additional information becomes available.<br /><br /><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> Active data sessions on Super SIM has been resolved and it is operating normally at this time.<br /><br /><strong><span style="color: #e67e23;">Update 1:</span> 2024-12-04 08:04 UTC / 2024-12-04 03:04 EST (UTC-5):</strong> Connectivity with Super SIM has been stable since around 07:06am UTC. At this time we do not see connectivity delays and the impacted traffic continues to recovery. We will continue to monitor the platform. If your devices continue to experience problems we suggest that customers reset the connectivity through the Super SIM console. This can often help re-establish a stable connection for the affected devices.<br /></span></p></details>
<beginValue>2024-12-04 06:14:00</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>3 Hours 23 Minutes</duration>
<summary>Connectivity Delays on Super SIM - 2024-12-02</summary>
<beginDisplay>02/12/2024 10:53:55</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Network Connectivity</p> <p><strong>When</strong><br /><strong>Start</strong>: Monday, December 02, 2024, 13:00 UTC / Monday, December 02, 2024, 08:00 EST (UTC-5)</p> <p><strong>End</strong>: Monday, December 02, 2024, 16:00 UTC / Monday, December 02, 2024, 11:00 EST (UTC-5)</p> <p><strong>What</strong><br /><strong>Description</strong>: Beginning at 13:00 UTC, we began experiencing delays in devices connecting to the network due to issues with the primary IMSIs on Super SIM. Devices may encounter a delay (between 3 to 9 minutes) when attempting to establish a connection as the SIMs switch over to backup IMSIs in order to restore full connectivity. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 2 hours or sooner if additional information becomes available.</p> <p><strong>UPDATE 1 2024-12-02 17:14 UTC / 2024-12-02 12:14 EST ( UTC-5)</strong>:Engineers observed recovery starting around 16:00 UTC. Devices that restart regularly due to their use case should no longer experience delays in connecting while waiting for the IMSI to change. Devices that do not restart regularly will remain on the alternate IMSI for up to 24 hours before switching back. At this time, we continue to monitor recovery and do not see further impact. We will provide another update in 2 hours or sooner if additional information becomes available. </p> <p><strong>RESOLUTION</strong>: <span>Connectivity with Super SIM has been stable since around 16:00 UTC. At this time we do not see connectivity delays and the impacted traffic continues to recovery. We will continue to monitor the platform, however at this time we consider this incident resolved. If your devices continue to experience any problems, we suggest that customers reset the connectivity through the Super SIM console. This can often help re-establish a stable connection for the affected devices.</span></p></details>
<beginValue>2024-12-02 15:53:55</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>49 Minutes</duration>
<summary>INC0132335 -Users experiencing errors across multiple systems</summary>
<beginDisplay>07/11/2024 14:08:48</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Login and functionality issues of multiple systems including KORE Console, Super SIM Console, and APIs. <br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Thursday, November 07, 2024  18:10 UTC / Thursday, November 07, 2024  13:10 EST (UTC-5)</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">End:  Thursday, November 07, 2024  19:49 UTC / Thursday, November 07, 2024  14:49 EST (UTC-5)<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><span style="color: #e67e23;"><strong>What</strong></span><br />Description: We are investigating a problem impacting multiple systems including KORE Console, Super SIM Console, and APIs. Users may experience unexpected errors when trying to log in or manage resources through these systems. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong><span style="color: #e67e23;">UPDATE 1</span> 2024-11-07 19:19 UTC / 2024-11-07 14:19 EST (UTC-5).</strong> KORE Engineers advised they are no longer seeing issues and will closely monitor the stability in the next 30 minutes.</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong><span style="color: #e67e23;">RESOLUTION:</span> </strong>All services are now back to normal and confirmed to be stable</p></details>
<beginValue>2024-11-07 19:08:48</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>2 Hours 22 Minutes</duration>
<summary/>
<beginDisplay>04/11/2024 22:53:18</beginDisplay>
<typeValue>degradation</typeValue>
<details><p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Data Sessions<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>When</strong><br />Start: Tuesday, November 5, 2024 03:05 UTC / Monday, November 4, 2024 22:05 EST (UTC-5)</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">End:  Tuesday, November 5, 2024 06:07 UTC / Tueday, November 5, 2024 01:07 EST (UTC-5)<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>What</strong><br />Description: Beginning at 3:05am UTC, we observed ~9.5% of active data sessions on Super SIM being dropped. Devices that attempted to reconnect immediately after losing connectivity should have been able to successfully reconnect to the redundant instances while the impacted one recovered. Our engineering team is actively working on identifying and resolving the issue. We will provide another update in 1 hour or sooner once more information becomes available. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">UPDATE 1 2024-11-05 04:46 UTC / 2024-11-04 23:46 EST (UTC-5) : Our engineering team is actively working on identifying and resolving the issue. We will provide another update in 2 hours or sooner once more information becomes available. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">UPDATE 2 : 2024-11-05 05:37 UTC / 2024-11-05 00:37 EST (UTC-5) We are seeing recovery on active data sessions on Super SIM. We will continue to monitor for system stability. We&#39;ll provide another update in 30 minutes or as soon as more information becomes available.</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">RESOLVED : Active data sessions on Super SIM has been resolved and it is operating normally at this time. </p></details>
<beginValue>2024-11-05 03:53:18</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>39 Minutes</duration>
<summary/>
<beginDisplay>22/10/2024 03:35:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Data Sessions<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>When</strong><br />Start: Tuesday, October 22, 2024, 07:35 UTC / Tuesday, October 22, 2024, 03:35 EDT (UTC-4)<br />End:  <span style="font-size: 11.0pt; line-height: 107%; font-family: Aptos, sans-serif;">Tuesday, October 22, 2024, 08:14 UTC / Tuesday, October 22, 2024, 04:14 EDT (UTC-4)</span> <br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>What</strong><br />Description: Starting at 07:35am UTC our monitoring system have detected that we lost about 8% of active PDN sessions in the US. We are seeing recovery as of the moment. Engineering team has been alerted and is actively investigating.</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong><span style="font-size: 11.0pt; line-height: 107%; font-family: Aptos, sans-serif;">RESOLUTION: </span></strong><span style="font-size: 11.0pt; line-height: 107%; font-family: Aptos, sans-serif;">Issue has been resolved and PDN sessions are back to pre-incident levels.</span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>UPDATE 1 2024-10-22 08:00 UTC / 2024-10-22 04:00 EDT (UTC-4): </strong>We are seeing recovery and missing less than 3% of Active PDN sessions in the US. </p></details>
<beginValue>2024-10-22 07:35:00</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>3 Days 8 Hours 45 Minutes</duration>
<summary/>
<beginDisplay>11/10/2024 12:00:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><strong><span style="color: #e67e23;">Who</span></strong><br /><span style="color: #000000;">Impacted Customer Solutions: Super SIM </span><br /><span style="color: #000000;">Impacted Services: DataLimit and ReadySimActivation Functionality Degraded</span><br /><span style="color: #000000;"> </span></p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><span style="color: #000000;">Start: Friday, October 11th, 2024, 16:00 UTC /   Friday, October 11th, 2024, 12:00 EDT (UTC-4)</span><br /><span style="color: #000000;">End:  Monday, October 14th, 2024, 20:45 UTC /   Monday, October 14th, 2024, 16:45 EDT (UTC-4)</span><br /><span style="color: #000000;"> </span></p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;">Description: We have detected a potential issue with SuperSim (DataLimit and ReadySimActivation functionalities are 100% down since Friday 11th October). Our engineering team has been alerted and is actively investigating. We will provide the update in 1 hour. le. <br /></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">RESOLUTION: </span>2024-10-14 16:30 UTC / 2024-10-14 12:30 EDT(UTC-4): </span></span></span></span></span></span></span></span></span></span></span></span></span></span></strong></span>We encountered an issue between Friday, October 11th, and 20:45 UTC that affected the Super SIM <em>Data Limit</em> and <em>Ready Sim Activation</em> functionalities. While connectivity remained unaffected, the following scenarios may have occurred:</p> <ul style="list-style-position: inside;"><li>SIM cards that reached their data limits during this period might not have been blocked as expected.</li><li>SIM cards that should have transitioned from <em>ready</em> to <em>active</em> after consuming a set amount of data remained in the <em>ready</em> state.</li></ul> <p>We are pleased to report that we have fully recovered from these issues. As of now, any SIM cards that should have been blocked or activated have been updated to reflect the correct state. All functionalities are operating normally.</p> <p>We apologize for any inconvenience caused. If you have further concerns, please contact our support team for assistance.</p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 3 </span>2024-10-14 16:30 UTC / 2024-10-14 12:30 EDT(UTC-4): </span></span></span></span></span></span></strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;">The issue has been identified and the Engineering suggested fix has been implemented and in-progress. We will continue to monitor and provide further updates in next 8 hours. </span></span></span></span></span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 2 </span>2024-10-14 12:30 UTC / 2024-10-14 08:30 EDT(UTC-4): </span></span></strong><span style="color: #e67e23;"><span style="color: #000000;">The issue has been identified and the Engineering suggested fix has been implemented and in-progress. We will continue to monitor and provide further updates in next 4 hours. </span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;">UPDATE 1 </span>2024-10-14 07:37 UTC / 2024-10-14 03:37 EDT(UTC-4): </strong>Our team has deployed the fix. The system started processing the backlog of delayed events. </span></p></details>
<beginValue>2024-10-11 16:00:00</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>2 Days 23 Hours 26 Minutes</duration>
<summary/>
<beginDisplay>08/10/2024 13:00:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><strong><span style="color: #e67e23;">Who</span></strong><br /><span style="color: #000000;">Impacted Customer Solutions: Super SIM </span><br /><span style="color: #000000;">Impacted Services: Billing information for Super SIM  is delayed via API and UI </span><br /><span style="color: #000000;"> </span></p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><span style="color: #000000;">Start: Tuesday, October 8th, 2024, 13:00 UTC /  Tuesday, October 8th, 2024, 09:00 EDT (UTC-4)</span><br /><span style="color: #000000;">End: Friday, October 11th, 2024, 16:26 UTC /   Friday, October 11th, 2024, 12:26 EDT (UTC-4)</span><br /><span style="color: #000000;"> </span><br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;">Description: Since 2024-10-08 1:00PM UTC KORE engineers have detected an issue with our billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is working to identify the issue. We will post the update in the next 2 hours or sooner if more information will become available. <br /><br /></span></p> <p><span style="color: #000000;"><span style="color: #e67e23;"><strong>Resolved <span style="color: #000000;">2024-10-11 16:26 UTC / 2024-10-11 12:26 EDT (UTC-4)</span></strong><span style="color: #000000;">The incident has been resolved. All pending events with the exception of ~1.82% have been processed. Most of which is likely to be duplicates. The system is back to normal. All customers should be able to access the previously missing data via the API and the UI.</span></span></span></p> <p><span style="color: #000000;"><span style="color: #e67e23;"><strong>UPDATE 4 </strong></span><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;">2024-10-10 18:00 UTC / 2024-10-10 14:00 EDT(UTC-4) </span></span></span></span></span></span></strong>As of Wednesday, October 9th, 4:00 PM UTC, we have resumed near-real-time processing for the amount billed fields in the Usage API and Console insights for both Programmable Wireless and Super SIM. <br />However, we are still facing issues with missing billed amounts for the following intervals:<br /><br />Monday, October 7th, 8:00 AM UTC – Tuesday, October 8th, 9:30 AM UTC: 30% of usage events are missing.<br />Tuesday, October 8th, 9:30 AM UTC – Wednesday, October 9th, 4:10 PM UTC: 100% of usage events are missing.<br /><br />The team has identified the issue and is working on a fix. The missing usage events and billed amounts for these intervals will be reprocessed and backfilled early next week<br /></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 3 </span>2024-10-10 12:00 UTC / 2024-10-10 08:00 EDT(UTC-4): </span></span></span></span></span></span></strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;">We are still experiencing the issue with the billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is still working to identify the issue. We will post the update in the next 16 hours or sooner if more information will become available.</span></span></span></span></span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 2 </span>2024-10-09 23:05 UTC / 2024-10-09 17:05 EDT(UTC-4) : </span></span></strong><span style="color: #e67e23;"><span style="color: #000000;">We are still experiencing the issue with the billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is still working to identify the issue. We will post the update tomorrow morning. </span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;">UPDATE 1 </span>2024-10-09 17:27 UTC / 2024-10-09 13:27 EDT(UTC-4)</strong>:We are still experiencing the issue with the billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is still working to identify the issue. We will post the update in the next 2 hours or sooner if more information will become available</span></p></details>
<beginValue>2024-10-08 17:00:00</beginValue>
<type>Degradation</type>
</outages>
<outages>
<duration>2 Hours 5 Minutes</duration>
<summary/>
<beginDisplay>01/10/2024 10:48:24</beginDisplay>
<typeValue>outage</typeValue>
<details><p><strong><span style="font-family: verdana; font-size: 8pt;"><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">INC0121338 - Outage - Super SIM - 2024-10-01 - RESOLVED</span></span></strong></p> <p> </p> <div align="left"> <table style="border-width: medium; border-color: currentcolor; width: 58.5094%; height: 429px;"><colgroup><col style="width: 99.5238%;" /></colgroup><tbody><tr style="height: 81.4px;"><td style="vertical-align: top; height: 81.4px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="color: #e67e23;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">WHO</span></strong></span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Impacted Customer Solutions</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Super SIM Customers</span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Impacted Services</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Super SIM</span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"> </p>   </td></tr><tr style="height: 101.2px;"><td style="vertical-align: top; height: 101.2px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="color: #e67e23;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">WHEN</span></strong></span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Start</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Tuesday, October 01, 2024, 14:11 UTC / Tuesday, October 01, 2024, 10:11 EDT (UTC-4) </span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">End</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Tuesday, October 01, 2024, 14:44 UTC / Tuesday, October 01, 2024, 10:44 EDT (UTC-4) </span></p> <br /><br /></td></tr><tr style="height: 176px;"><td style="vertical-align: top; height: 176px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="color: #e67e23;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">WHAT</span></strong></span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Description</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: We are currently observing issues affecting device attachments on 2G/3G networks starting 14:11 UTC. The issue is being traced to a degradation of network links with our external connectivity partners. This degradation may result in intermittent connectivity issues for devices attempting to attach to the network using 2G/3G Radio Types. Devices that are affected may experience delays or failures in connecting, but secondary IMSIs should allow reconnections as the impacted links recover. Our team is closely monitoring the situation and collaborating with our partners to resolve the issue as quickly as possible. <br /><br /></span></p> </td></tr><tr style="height: 52.8px;"><td style="vertical-align: top; height: 52.8px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;"><span style="color: #e67e23;">UPDATE 1: </span></span><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">2024-10-01 13:37 UTC / 2024-10-01 09:37 EDT (UTC-4): </span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Service to impacted partner has resolved their underlying issue and service has been restored. At this time we expect all devices to be able to connect normally. If you continue to experience any issue please attempt a Reset SIM connectivity in the console and if that doesn&#39;t help write in to our support team. </span></p> </td></tr><tr style="height: 17.6px;"><td style="vertical-align: top; height: 17.6px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"> </p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;"><span style="color: #e67e23;">RESOLUTION: </span></span></strong><span style="color: #000000;"><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">Super SIM connectivity to the impacted partner has been stable for over an hour. We will mark this incident as closed. If customer continue to experience any issues with connectivity please open a support ticket.</span><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;"> </span></span></p> </td></tr></tbody></table>   </div></details>
<beginValue>2024-10-01 14:48:24</beginValue>
<type>Outage</type>
</outages>
<outages>
<duration>6 Hours 54 Minutes</duration>
<summary/>
<beginDisplay>30/09/2024 02:28:00</beginDisplay>
<typeValue>degradation</typeValue>
<details><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td> <table border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td> <p><strong>KORE Incident INC0120562 - Service Degradation- SUPER SIM - 2024-09-30 - RESOLVED<br /></strong></p> <p>Dear Valued Customer,</p> <p>We would like to inform you about the following service degradation.</p> </td></tr></tbody></table> </td></tr></tbody></table> <table style="height: 448.8px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center"><tbody><tr style="height: 90.2px;"><td style="width: 7.64078%; height: 90.2px;" width="60px"><a href="https://preview.pardot.com/emailEditor/loadDraftContent/useHml/true#" rel="nofollow"><img src="https://go.pardot.com/l/729503/2022-11-13/4dtg4f/729503/16683615652z6LUtOj/icon1_res.png" alt="" /></a></td><td style="width: 92.3439%; height: 90.2px;"> <p>Who</p> <p>Impacted Customer Solutions: SUPER SIM</p> <p>Impacted Services: Data connectivity. Users may experience issues 3g/4g with LBO data services</p> </td></tr><tr style="height: 90.2px;"><td style="width: 7.64078%; height: 90.2px;" width="60px"><a href="https://preview.pardot.com/emailEditor/loadDraftContent/useHml/true#" rel="nofollow"><img src="https://go.pardot.com/l/729503/2022-11-13/4dtg4j/729503/1668361565zAzkBzST/icon2_res.png" alt="" /></a></td><td style="width: 92.3439%; height: 90.2px;"> <p>When</p> <p>Start: Monday, September 30, 2024 04:20 UTC / Monday, September 30, 2024 12:20 EDT(UTC-4)</p> <p>End: Monday, September 30, 2024 13:22 UTC / Monday, September 30, 2024 09:22 EDT(UTC-4)</p> </td></tr><tr style="height: 79.2px;"><td style="width: 7.64078%; height: 79.2px;" width="60px"><a href="https://preview.pardot.com/emailEditor/loadDraftContent/useHml/true#" rel="nofollow"><img src="https://go.pardot.com/l/729503/2022-11-13/4dtg4m/729503/1668361565CzBYQMo8/icon3_res.png" alt="" /></a></td><td style="width: 92.3439%; height: 79.2px;"> <p>What</p> <p>Description: Beginning at 4:20AM UTC, we observed ~16% of active data sessions on Super SIM being dropped. Our engineering team is actively working on identifying and resolving the issue. We will provide another update in 1 hour or sooner once more information becomes available.</p> </td></tr><tr style="height: 52.8px;"><td style="width: 7.64078%; height: 52.8px;"> </td><td style="width: 92.3439%; height: 52.8px;"> <p><strong>UPDATE 1 2024-09-30 06:46 UTC /2024-09-30 02:46 EDT(UTC-4)</strong>: KORE engineers continue to investigate the issue. We will provide another update in 2 hours or sooner once more information becomes available.</p> </td></tr><tr style="height: 83.6px;"><td style="width: 7.64078%; height: 83.6px;"> </td><td style="width: 92.3439%; height: 83.6px;"> <p><strong>UPDATE 2 2024-09-30 08:35 UTC/2024-09-30 04:35 EDT(UTC-4)</strong>: About 4% of devices may still experience connectivity issues. Our engineering team is actively working alongside the affected network provider to resolve the issue as quickly as possible. In the meantime, we kindly suggest that customers reset the connectivity through the console or through the APIs (by reactivating SIMs) if they notice that some of their SIM cards are still experiencing issues. We will provide another update in 4 hours or sooner once more information becomes available.</p> </td></tr><tr style="height: 52.8px;"><td style="width: 7.64078%; height: 52.8px;"> </td><td style="width: 92.3439%; height: 52.8px;"> <p><strong>UPDATE 3 2024-09-30 12:31 UTC/2024-09-30 08:31 EDT(UTC-4): </strong>We are now seeing recovery with regards to Super SIM Connectivity Data Session Drop. We are continuing to monitor for service stability. We will provide another update in 2 hour or as soon as more information becomes available.</p> </td></tr><tr><td style="width: 7.64078%;"> </td><td style="width: 92.3439%;"> <p><strong>RESOLVED: </strong>The incident affecting Super SIM active data session connectivity has been resolved, and the product is operating normally at this time.<strong><br /></strong></p> </td></tr></tbody></table> <p> </p> <p> </p></details>
<beginValue>2024-09-30 06:28:00</beginValue>
<type>Degradation</type>
</outages>
<totalPageCount>8</totalPageCount>
<totalCount>36</totalCount>
<serviceName>Super SIM</serviceName>
</data>
<roles/>
<link>function link(scope, element, attrs, controller) { }</link>
<rectangle_id>24288f14470c9690ab11f92c016d43b2</rectangle_id>
<_metastack_size>0</_metastack_size>
<option_schema/>
<sys_class_name>sp_widget</sys_class_name>
<sys_id>6a268f9847c89690ab11f92c016d43bc</sys_id>
<public>true</public>
<client_script>function ($scope, spUtil, $timeout) { var c = this; c.pageSize = 5; c.currentPage = 0; c.getDisplayedOutages = function () { var start = c.currentPage * c.pageSize; return c.data.outages.slice(start, start + c.pageSize); }; c.nextPage = function () { if ((c.currentPage + 1) * c.pageSize < c.data.totalCount) { c.currentPage++; } }; c.prevPage = function () { if (c.currentPage > 0) { c.currentPage--; } }; c.openPopup = function (details, summary) { c.summary = summary || "Summary"; c.modalDetails = details || "No details available."; $timeout(function () { $('#detailsModal').modal('show'); }); }; $scope.$on('sp.outage.updated', function () { c.currentPage = 0; }); } </client_script>
<name>Status Page Service History</name>
<options>
<css> #x24288f14470c9690ab11f92c016d43b2 .panel-title:before { border-radius: .2rem; color: #fff; content: "\f133"; font-family: FontAwesome; font-size: 1.8rem; margin-right: .5rem; padding: .2rem .3rem; } #x24288f14470c9690ab11f92c016d43b2 .panel-title { align-items: center; background-color: #9bcb4c; border-radius: 4px 0; color: $text-color-light; display: flex; flex-direction: row; font-size: 1.6rem; font-weight: 400; padding: 1rem 1.5rem; text-transform: none; width: max-content; } #x24288f14470c9690ab11f92c016d43b2 .bs-callout-success { background-color: tint($brand-accent, 90%); border-color: $brand-accent; }</css>
<color>default</color>
<sp_column>48f98214d7111200a9addd173e24d47c</sp_column>
<sp_column_dv>1</sp_column_dv>
<active>true</active>
<color_dv>Default</color_dv>
<sys_tags/>
<sys_class_name>sp_instance</sys_class_name>
<size_dv>Medium</size_dv>
<sp_widget_dv>Status Page Service History</sp_widget_dv>
<size>md</size>
<sp_widget>6a268f9847c89690ab11f92c016d43bc</sp_widget>
<sys_class_name_dv>Instance</sys_class_name_dv>
<order>1</order>
</options>
<sys_scope>global</sys_scope>
<id>status_page_service_history</id>
<field_list/>
<controller_as>c</controller_as>
<_server_time>0.007</_server_time>
</widget>
<instance_id>24288f14470c9690ab11f92c016d43b2</instance_id>
<title/>
</widgets>
<class_name>kore-panel</class_name>
<semantic_tag/>
<order>1</order>
</columns>
<columns>
<sys_id>600b76ddc3129694fe54f6ff05013137</sys_id>
<size_classes>col-xs-3 col-md-3 </size_classes>
<widgets>
<sys_id>14c225b4c3c02a50fe54f6ff050131ab</sys_id>
<widget>
<template><div ng-if="data.loggedIn &amp;&amp; data.serviceID" class="panel panel-{{options.color}} b"> <div class="panel-heading"> <h4 class="panel-title">Service Status Updates<span ng-if="data.subscriber" class="fa fa-envelope status-update"></span></h4> </div> <div class="panel-body"> <div ng-if="data.subscriber"> <div class="m-b"> You are currently subscribed to updates on this Service's status </div> <button class="btn btn-primary btn-block" ng-click="c.unsubscribe()">Unsubscribe From Updates</button> </div> <div ng-if="!data.subscriber"> <div class="m-b"> You are not subscribed to updates on this Service's status </div> <button class="btn btn-primary btn-block" ng-click="c.subscribe()">Subscribe To Updates</button> </div> </div> </div></template>
<css> .vb4e1c134c38ce650fe54f6ff0501311c .btn { white-space: normal; } .vb4e1c134c38ce650fe54f6ff0501311c .status-update { float: right; }</css>
<data>
<subscriber>false</subscriber>
<subscribeMessage>You subscribed to receive updates for this service</subscribeMessage>
<unsubscribeMessage>You unsubscribed receiving updates for this service</unsubscribeMessage>
<loggedIn>false</loggedIn>
<serviceID>cb4ae2ca479f0610ab11f92c016d43f1</serviceID>
</data>
<roles/>
<link>function link(scope, element, attrs, controller) { }</link>
<rectangle_id>14c225b4c3c02a50fe54f6ff050131ab</rectangle_id>
<_metastack_size>0</_metastack_size>
<option_schema/>
<sys_class_name>sp_widget</sys_class_name>
<sys_id>b4e1c134c38ce650fe54f6ff0501311c</sys_id>
<public>true</public>
<client_script>function ($scope, spUtil, spAriaUtil) { var c = this; c.subscribe = function() { c.data.action = "subscribe"; c.server.update().then(function(){ spAriaUtil.sendLiveMessage($scope.data.subscribeMessage); }); } c.unsubscribe = function() { c.data.action = "unsubscribe"; c.server.update().then(function() { spAriaUtil.sendLiveMessage($scope.data.unsubscribeMessage); }); } } </client_script>
<name>Copy of Service Status Subscription</name>
<options>
<css> #x14c225b4c3c02a50fe54f6ff050131ab .panel-title { align-items: center; background-color: #9bcb4c; border-radius: 4px 0; color: $text-color-light; display: flex; flex-direction: row; font-size: 1.6rem; font-weight: 400; padding: 1rem 1.5rem; text-transform: none; width: max-content; } #x14c225b4c3c02a50fe54f6ff050131ab .bs-callout-success { background-color: tint($brand-accent, 90%); border-color: $brand-accent; } #x14c225b4c3c02a50fe54f6ff050131ab .status-update { margin-left: 12px; }</css>
<color>default</color>
<sp_column>600b76ddc3129694fe54f6ff05013137</sp_column>
<sp_column_dv>2</sp_column_dv>
<active>true</active>
<color_dv>Default</color_dv>
<sys_tags/>
<sys_class_name>sp_instance</sys_class_name>
<size_dv>Medium</size_dv>
<sp_widget_dv>Copy of Service Status Subscription</sp_widget_dv>
<size>md</size>
<sp_widget>b4e1c134c38ce650fe54f6ff0501311c</sp_widget>
<sys_class_name_dv>Instance</sys_class_name_dv>
<order>1</order>
</options>
<sys_scope>global</sys_scope>
<id/>
<field_list/>
<controller_as>c</controller_as>
<_server_time>0.007</_server_time>
</widget>
<instance_id>14c225b4c3c02a50fe54f6ff050131ab</instance_id>
<title/>
</widgets>
<widgets>
<sys_id>79fb5f29c35a5a94fe54f6ff05013187</sys_id>
<widget>
<template/>
<sys_id/>
<data/>
<name/>
<id/>
<sys_class_name/>
<controller_as/>
</widget>
<instance_id>79fb5f29c35a5a94fe54f6ff05013187</instance_id>
<title/>
</widgets>
<class_name/>
<semantic_tag/>
<order>2</order>
</columns>
<columns>
<sys_id>6b1a4614d7111200a9addd173e24d483</sys_id>
<size_classes>col-md-3 </size_classes>
<class_name>kore-panel</class_name>
<semantic_tag/>
<order>3</order>
</columns>
<class_name/>
<semantic_tag/>
<order>2</order>
</rows>
<class_name/>
<semantic_tag/>
<order>2</order>
</containers>
<containers>
<sys_id>8c0d6e10c3f99e10fe54f6ff050131bd</sys_id>
<bootstrap_alt>false</bootstrap_alt>
<subheader>false</subheader>
<background>{"background-size":"initial","background-position":"center center"}</background>
<width>container</width>
<container_class_name/>
<title/>
<rows>
<sys_id>fd0dae10c3f99e10fe54f6ff050131d5</sys_id>
<columns>
<sys_id>b10dae10c3f99e10fe54f6ff050131d9</sys_id>
<size_classes>col-md-12 </size_classes>
<widgets>
<sys_id>0d1015714728aad0ab11f92c016d43eb</sys_id>
<widget>
<template><div id="status_page_calendar" class="panel panel-{{options.color}} b"> <div class="panel-heading"> <h3 class="panel-title">Calendar<span ng-if="data.serviceDisplay"> - {{data.serviceDisplay}}</span></h3> </div> <!-- Calendar Container --> <div id="calendar"></div> <!-- Outage Details Modal --> <div id="outageModal" class="modal fade" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title">{{selectedEvent.title}}</h5> <button type="button" class="close" data-dismiss="modal">×</button> </div> <div class="modal-body"> <p><strong>Type:</strong> <span ng-bind="selectedEvent.type"></span></p> <p><strong>Start:</strong> <span ng-bind="selectedEvent.start"></span></p> <p><strong>End:</strong> <span ng-bind="selectedEvent.end"></span></p> <p><strong>Description:</strong> <span ng-bind-html="selectedEvent.description"></span></p> </div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> </div> </div> </div> </div> </div></template>
<css> .v369f49bd47e4aad0ab11f92c016d432e #calendar { max-width: 1000px; margin: 20px auto; padding: 10px; background: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, .1); } .v369f49bd47e4aad0ab11f92c016d432e .modal-content { border-radius: 8px; } .v369f49bd47e4aad0ab11f92c016d432e .fc-button { background-color: #f8f9fa !important; color: #333 !important; border: 1px solid #ccc !important; border-radius: 5px !important; padding: 5px 10px !important; } .v369f49bd47e4aad0ab11f92c016d432e .fc-button-active { background-color: #4CAF93 !important; color: white !important; border: none !important; } .v369f49bd47e4aad0ab11f92c016d432e .fc-button:hover { background-color: #d4d4d4 !important; } .v369f49bd47e4aad0ab11f92c016d432e .fc-toolbar-title { font-size: 18px !important; font-weight: bold; text-align: center; } .v369f49bd47e4aad0ab11f92c016d432e .fc-event { cursor: pointer !important; opacity: 1 !important; color: #fff !important; } .v369f49bd47e4aad0ab11f92c016d432e .fc-event[style*="background-color: #57B9FF"] { background-color: #007BFF !important; border-color: #007BFF !important; }</css>
<data>
<service>cb4ae2ca479f0610ab11f92c016d43f1</service>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 10pt;"><strong><span style="color: #e67e23;">Who</span></strong><br /><strong>Impacted Customer Solutions: </strong>Super SIM <br /><strong>Impacted Services:</strong> Data connectivity.<br /> <br /><strong><span style="color: #e67e23;">When</span></strong><br /><strong>Start:</strong> Thursday, March 27, 2025 13:09 UTC / Thursday, March 27, 2025 09:09 EST (UTC-4)<br /><strong>End:</strong> Thursday, March 27, 2025 17:15 UTC / Thursday, March 27, 2025 13:15 EST (UTC-4)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 13:09 UTC we are investigating an issue where devices may experience failures when attempting to connect. We are actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.   <br /><br /><span style="color: #e67e23;"><strong>RESOLUTION: </strong></span>As of 17:15 UTC, we have observed recovery of the network connectivity issue affecting Super SIM devices. Connectivity rates have returned to normal levels, and impacted devices are now able to attach and update mobility without significant delays.<br />We will continue to monitor the situation to ensure service stability. If you have devices that are still not reconnecting, please try sending a <strong>&#34;Reset Connectivity&#34;</strong> command from the Super SIM console for a few SIMs to prompt them to re-register to the network.<br /><br /><strong><span style="color: #e67e23;">UPDATE 2 </span>2025-03-27 17:59 UTC / 2025-03-27 13:59 EST (UTC-5): </strong>Since around 16:30 UTC, we have observed significant recovery of the network connectivity issue affecting mobility updates and/or new attachments due to a loss of Diameter connectivity with one of our partners. While connectivity rates have improved, full recovery has not yet been achieved. Our partner is still experiencing network congestion, which may result in continued delays for some impacted devices. Devices may face throttling, denials, or require multiple retries to establish connectivity.<br />We are continuing to monitor for service stability and will provide another update if more information becomes available.<br /><br /><strong><span style="color: #e67e23;">UPDATE 1</span></strong> <strong>2025-03-27 16:59 UTC / 2025-03-27 12:59 EST (UTC-4):</strong> Since 13:09 UTC, we have been investigating an issue affecting devices using Super SIM, where some may experience failures with mobility updates and/or new attachments due to a loss of Diameter connectivity with one of our partners.<br />The root cause of the issue has been identified, and connectivity rates are improving. Over the past 45 minutes, we have observed an increase in successful data sessions. However, our partner is still experiencing network congestion, which is preventing normal operations. Impacted devices may connect with significant delays, face throttling, or require multiple retries to establish connectivity.<br />Our team is actively working with our partner to fully restore service. We will provide the next update in 1 hour or sooner as more information becomes available.</span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-03-27 13:09:00</start>
<end>2025-03-27 17:15:00</end>
<id>0538952547e8ee109dc0d9f4116d4361</id>
<title>Super SIM connectivity issues - 2025-03-27</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 10pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services: </strong>Data connectivity.<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start: </strong>Sunday, March 30, 2025 23:40 UTC / Sunday, March 30, 2025 19:40 EST (UTC-4)<br /><strong>End:</strong> TBD<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description: </strong>Since 23:40 UTC we are experiencing Super SIM connectivity issues. Our engineering team is actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. <br /><br /><strong><span style="color: #e67e23;">UPDATE 1</span> 2025-03-31 01:23 UTC / 2025-03-30 21:23 EST (UTC-5)</strong>: Since 23:40 UTC, we have been investigating an issue affecting Super SIM devices, where some may experience failures when attempting to establish data connections. Beginning around 00:25 UTC, we began to see some increase in the number of devices connected and exchanging data; however, the number of devices exchanging data is only ~45% of the pre-incident levels.<br />Our team is actively working to identify the cause of the disruption. Our carrier partners are also actively investigating the issue. We will provide the next update in 1 hour or sooner as more information becomes available.<br /></span></p></description>
<type>Outage</type>
</extendedProps>
<start>2025-03-30 23:40:00</start>
<end>null</end>
<id>0a9a2ea683e06a50dbeac410feaad358</id>
<title>Super SIM connectivity issues - 2025-03-30</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 10pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> SUPER SIM<br /><strong>Impacted Services: </strong>Connectivity downtime for location updates, CLRs and SMS use cases<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong>  February 20th, 2025, 08:00 UTC / February 20th, 2025, 03:00 EST (UTC-5)<br /><strong>End:</strong>  February 20th, 2025, 08:30 UTC / February 20th, 2025, 03:30 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description: </strong>As part of the integration of Twilio&#39;s IoT business unit into KORE, we will be performing a scheduled Database migration on February 20th, 2025, between 08:00 UTC and 08:30 UTC. During this time, there may be a connectivity downtime for the SUPER SIM product. We anticipate the delay will not exceed 4 minutes and will strive to minimize it as much as possible. Please note, this maintenance will not affect connectivity for all customers but devices performing location updates, CLRs and SMS might be impacted during the maintenance window.</span></p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-02-20 08:00:00</start>
<end>2025-02-20 08:30:00</end>
<id>0d086b3983335290dbeac410feaad3b4</id>
<title>Scheduled Maintenance for SUPER SIM </title>
</outages>
<outages>
<extendedProps>
<description><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 17, 2025, 08:30 UTC / Monday, March 17, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Monday, March 17, 2025, 16:00 UTC / Monday, March 17, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-17 08:30:00</start>
<end>2025-03-17 16:00:00</end>
<id>11aaffac839ce650dbeac410feaad310</id>
<title>KORE Case CS0175456 - Planned Maintenance - Network Migration - Super SIM - 2025-03-17</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;">Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.<br /></span></p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 03, 2025, 08:30 UTC / Monday, March 03, 2025, 03:30 EST (UTC-5)<br /><strong>End:</strong> Monday, March 03, 2025, 16:00 UTC / Monday, March 03, 2025, 11:00 EST (UTC-5) </p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.<br /><br />Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-03 08:30:00</start>
<end>2025-03-03 16:00:00</end>
<id>14f12d2897c06214d038301e6253afcd</id>
<title>KORE Case CS0170128 - Planned Maintenance - Network Migration - 2025-03-03</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>WHO</strong></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">Impacted Customer Solutions: Programmable Wireless Customers<br />Impacted Services: Usage and Billing Reports Delays</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>When</strong><br />Start: Friday, December 13, 2024, 06:00 UTC / Friday, December 13, 2024, 01:00 EST (UTC-5)<br />End:  Friday, December 13, 2024, 16:00 UTC / Friday, December 13, 2024, 11:00 EST (UTC-5) <br /> <br /><strong>What</strong><br />Description: As part of the integration of Twilio&#39;s IoT business unit into KORE, we will be performing a scheduled migration of several services on Friday, December 13, 2024, between 06:00 UTC and 16:00 UTC. During this time, there may be a delay in data usage reports for the Programmable Wireless SIM product. We anticipate the delay will not exceed 3 hours and will strive to minimize it as much as possible. Please note, this maintenance will not affect connectivity. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p></description>
<type>Maintenance</type>
</extendedProps>
<start>2024-12-13 07:10:46</start>
<end>2024-12-13 16:00:00</end>
<id>15ce77f39396d6504019ba6a6aba106b</id>
<title>Scheduled Maintenance for Programmable Wireless – Usage and Billing Reports Delays</title>
</outages>
<outages>
<extendedProps>
<description><p><strong><span style="color: #e67e23;">Who</span></strong><br /><span style="color: #000000;">Impacted Customer Solutions: Super SIM </span><br /><span style="color: #000000;">Impacted Services: Billing information for Super SIM  is delayed via API and UI </span><br /><span style="color: #000000;"> </span></p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><span style="color: #000000;">Start: Tuesday, October 8th, 2024, 13:00 UTC /  Tuesday, October 8th, 2024, 09:00 EDT (UTC-4)</span><br /><span style="color: #000000;">End: Friday, October 11th, 2024, 16:26 UTC /   Friday, October 11th, 2024, 12:26 EDT (UTC-4)</span><br /><span style="color: #000000;"> </span><br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;">Description: Since 2024-10-08 1:00PM UTC KORE engineers have detected an issue with our billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is working to identify the issue. We will post the update in the next 2 hours or sooner if more information will become available. <br /><br /></span></p> <p><span style="color: #000000;"><span style="color: #e67e23;"><strong>Resolved <span style="color: #000000;">2024-10-11 16:26 UTC / 2024-10-11 12:26 EDT (UTC-4)</span></strong><span style="color: #000000;">The incident has been resolved. All pending events with the exception of ~1.82% have been processed. Most of which is likely to be duplicates. The system is back to normal. All customers should be able to access the previously missing data via the API and the UI.</span></span></span></p> <p><span style="color: #000000;"><span style="color: #e67e23;"><strong>UPDATE 4 </strong></span><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;">2024-10-10 18:00 UTC / 2024-10-10 14:00 EDT(UTC-4) </span></span></span></span></span></span></strong>As of Wednesday, October 9th, 4:00 PM UTC, we have resumed near-real-time processing for the amount billed fields in the Usage API and Console insights for both Programmable Wireless and Super SIM. <br />However, we are still facing issues with missing billed amounts for the following intervals:<br /><br />Monday, October 7th, 8:00 AM UTC – Tuesday, October 8th, 9:30 AM UTC: 30% of usage events are missing.<br />Tuesday, October 8th, 9:30 AM UTC – Wednesday, October 9th, 4:10 PM UTC: 100% of usage events are missing.<br /><br />The team has identified the issue and is working on a fix. The missing usage events and billed amounts for these intervals will be reprocessed and backfilled early next week<br /></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 3 </span>2024-10-10 12:00 UTC / 2024-10-10 08:00 EDT(UTC-4): </span></span></span></span></span></span></strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;">We are still experiencing the issue with the billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is still working to identify the issue. We will post the update in the next 16 hours or sooner if more information will become available.</span></span></span></span></span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 2 </span>2024-10-09 23:05 UTC / 2024-10-09 17:05 EDT(UTC-4) : </span></span></strong><span style="color: #e67e23;"><span style="color: #000000;">We are still experiencing the issue with the billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is still working to identify the issue. We will post the update tomorrow morning. </span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;">UPDATE 1 </span>2024-10-09 17:27 UTC / 2024-10-09 13:27 EDT(UTC-4)</strong>:We are still experiencing the issue with the billing pipeline. The bug in software caused the billing information to be delayed on the UI and API. The team is still working to identify the issue. We will post the update in the next 2 hours or sooner if more information will become available</span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-10-08 17:00:00</start>
<end>2024-10-11 16:26:00</end>
<id>162f038397011ed0d038301e6253af18</id>
<title>No Title</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 26, 2025, 08:30 UTC / Wednesday, March 26, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Wednesday, March 26, 2025, 16:00 UTC / Wednesday, March 26, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p> </p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-26 08:30:00</start>
<end>2025-03-26 16:00:00</end>
<id>1945e6d2475822d4f6be545c416d4327</id>
<title>KORE Case CS0176678 - Planned Maintenance - Network Migration - 2025-03-26 - CANCELLED</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Network Connectivity<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Friday, December 27, 2024  12:50 UTC / Friday, December 27, 2024  07:50  EST (UTC-5)<br /><strong>End:</strong> Friday, December 27, 2024  13:41 UTC / Friday, December 27, 2024  08:41  EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 12:50 pm UTC we are experiencing Super SIM connectivity issues. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.  </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span><strong><span style="color: #e67e23;">RESOLUTION: </span></strong>Between 12:50 and 13:41 UTC today, the Super SIM product experienced a higher than normal signaling traffic from the mobile networks in what is known a signaling storm. Such an event can delay signaling causing data sessions to fail. At this time we do not consider there to be any additional impact to customer devices. It appears the root cause of this event was on our partners networks and we are working with them to identify possible improvements</span> </span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-12-27 12:50:02</start>
<end>2024-12-27 13:41:01</end>
<id>1fe8d9acc3be92d466071d63e40131f9</id>
<title>Super SIM Network Connectivity Issues 2024-12-27</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Signing up KORE Console and linking to Twilio Console <br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Wednesday, January 22, 2025 02:30 UTC / Tuesday, January 21, 2025 21:30 EST(UTC-5)<br />End: <span>Wednesday, January 22, 2025, 22:24 UTC / Wednesday, January 22, 2025, 17:24 EST (UTC-5)</span> <br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;"><strong>Description</strong></span>: We are investigating an issue where new users signing up for both Twilio and KORE are unable to verify that their accounts are linked. This is blocking them from advancing to ordering SIM hardware or managing their SIMs in the Twilio Console. This only impacts new users and has no impact on existing users&#39; ability to manage their SIMs and has no impact on connectivity.We will provide another update in 1 hour or sooner once more information becomes available.<br /><br /><br /><span><strong><span style="color: #e67e23;">RESOLUTION</span></strong>: We have identified an issue that caused a unique endpoint used to share information related to the account linking workflow to become unreachable. This resulted in the information available to the Twilio Console being out of date and prevented users from completing the verification step of the linking process. The issue has been resolved and users can again complete the KORE and Twilio account linking process. </span> <br /></span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-01-22 20:36:33</start>
<end>2025-01-22 22:56:53</end>
<id>279330859397da104019ba6a6aba105b</id>
<title>New customer sign up and account linking issues</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <table border="0" width="100%" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td> <table border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td> <p><strong>KORE Incident INC0120562 - Service Degradation- SUPER SIM - 2024-09-30 - RESOLVED<br /></strong></p> <p>Dear Valued Customer,</p> <p>We would like to inform you about the following service degradation.</p> </td></tr></tbody></table> </td></tr></tbody></table> <table style="height: 448.8px;" border="0" width="100%" cellspacing="0" cellpadding="0" align="center"><tbody><tr style="height: 90.2px;"><td style="width: 7.64078%; height: 90.2px;" width="60px"><a href="https://preview.pardot.com/emailEditor/loadDraftContent/useHml/true#" rel="nofollow"><img src="https://go.pardot.com/l/729503/2022-11-13/4dtg4f/729503/16683615652z6LUtOj/icon1_res.png" alt="" /></a></td><td style="width: 92.3439%; height: 90.2px;"> <p>Who</p> <p>Impacted Customer Solutions: SUPER SIM</p> <p>Impacted Services: Data connectivity. Users may experience issues 3g/4g with LBO data services</p> </td></tr><tr style="height: 90.2px;"><td style="width: 7.64078%; height: 90.2px;" width="60px"><a href="https://preview.pardot.com/emailEditor/loadDraftContent/useHml/true#" rel="nofollow"><img src="https://go.pardot.com/l/729503/2022-11-13/4dtg4j/729503/1668361565zAzkBzST/icon2_res.png" alt="" /></a></td><td style="width: 92.3439%; height: 90.2px;"> <p>When</p> <p>Start: Monday, September 30, 2024 04:20 UTC / Monday, September 30, 2024 12:20 EDT(UTC-4)</p> <p>End: Monday, September 30, 2024 13:22 UTC / Monday, September 30, 2024 09:22 EDT(UTC-4)</p> </td></tr><tr style="height: 79.2px;"><td style="width: 7.64078%; height: 79.2px;" width="60px"><a href="https://preview.pardot.com/emailEditor/loadDraftContent/useHml/true#" rel="nofollow"><img src="https://go.pardot.com/l/729503/2022-11-13/4dtg4m/729503/1668361565CzBYQMo8/icon3_res.png" alt="" /></a></td><td style="width: 92.3439%; height: 79.2px;"> <p>What</p> <p>Description: Beginning at 4:20AM UTC, we observed ~16% of active data sessions on Super SIM being dropped. Our engineering team is actively working on identifying and resolving the issue. We will provide another update in 1 hour or sooner once more information becomes available.</p> </td></tr><tr style="height: 52.8px;"><td style="width: 7.64078%; height: 52.8px;"> </td><td style="width: 92.3439%; height: 52.8px;"> <p><strong>UPDATE 1 2024-09-30 06:46 UTC /2024-09-30 02:46 EDT(UTC-4)</strong>: KORE engineers continue to investigate the issue. We will provide another update in 2 hours or sooner once more information becomes available.</p> </td></tr><tr style="height: 83.6px;"><td style="width: 7.64078%; height: 83.6px;"> </td><td style="width: 92.3439%; height: 83.6px;"> <p><strong>UPDATE 2 2024-09-30 08:35 UTC/2024-09-30 04:35 EDT(UTC-4)</strong>: About 4% of devices may still experience connectivity issues. Our engineering team is actively working alongside the affected network provider to resolve the issue as quickly as possible. In the meantime, we kindly suggest that customers reset the connectivity through the console or through the APIs (by reactivating SIMs) if they notice that some of their SIM cards are still experiencing issues. We will provide another update in 4 hours or sooner once more information becomes available.</p> </td></tr><tr style="height: 52.8px;"><td style="width: 7.64078%; height: 52.8px;"> </td><td style="width: 92.3439%; height: 52.8px;"> <p><strong>UPDATE 3 2024-09-30 12:31 UTC/2024-09-30 08:31 EDT(UTC-4): </strong>We are now seeing recovery with regards to Super SIM Connectivity Data Session Drop. We are continuing to monitor for service stability. We will provide another update in 2 hour or as soon as more information becomes available.</p> </td></tr><tr><td style="width: 7.64078%;"> </td><td style="width: 92.3439%;"> <p><strong>RESOLVED: </strong>The incident affecting Super SIM active data session connectivity has been resolved, and the product is operating normally at this time.<strong><br /></strong></p> </td></tr></tbody></table> <p> </p> <p> </p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-09-30 06:28:00</start>
<end>2024-09-30 13:22:02</end>
<id>2f2d664847cd1ad0f6be545c416d431c</id>
<title>No Title</title>
</outages>
<outages>
<extendedProps>
<description><p><strong><span style="font-family: verdana; font-size: 8pt;"><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">INC0121338 - Outage - Super SIM - 2024-10-01 - RESOLVED</span></span></strong></p> <p> </p> <div align="left"> <table style="border-width: medium; border-color: currentcolor; width: 58.5094%; height: 429px;"><colgroup><col style="width: 99.5238%;" /></colgroup><tbody><tr style="height: 81.4px;"><td style="vertical-align: top; height: 81.4px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="color: #e67e23;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">WHO</span></strong></span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Impacted Customer Solutions</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Super SIM Customers</span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Impacted Services</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Super SIM</span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"> </p>   </td></tr><tr style="height: 101.2px;"><td style="vertical-align: top; height: 101.2px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="color: #e67e23;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">WHEN</span></strong></span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Start</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Tuesday, October 01, 2024, 14:11 UTC / Tuesday, October 01, 2024, 10:11 EDT (UTC-4) </span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">End</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: Tuesday, October 01, 2024, 14:44 UTC / Tuesday, October 01, 2024, 10:44 EDT (UTC-4) </span></p> <br /><br /></td></tr><tr style="height: 176px;"><td style="vertical-align: top; height: 176px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><span style="color: #e67e23;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">WHAT</span></strong></span></p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Description</span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">: We are currently observing issues affecting device attachments on 2G/3G networks starting 14:11 UTC. The issue is being traced to a degradation of network links with our external connectivity partners. This degradation may result in intermittent connectivity issues for devices attempting to attach to the network using 2G/3G Radio Types. Devices that are affected may experience delays or failures in connecting, but secondary IMSIs should allow reconnections as the impacted links recover. Our team is closely monitoring the situation and collaborating with our partners to resolve the issue as quickly as possible. <br /><br /></span></p> </td></tr><tr style="height: 52.8px;"><td style="vertical-align: top; height: 52.8px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;"><span style="color: #e67e23;">UPDATE 1: </span></span><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">2024-10-01 13:37 UTC / 2024-10-01 09:37 EDT (UTC-4): </span></strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;">Service to impacted partner has resolved their underlying issue and service has been restored. At this time we expect all devices to be able to connect normally. If you continue to experience any issue please attempt a Reset SIM connectivity in the console and if that doesn&#39;t help write in to our support team. </span></p> </td></tr><tr style="height: 17.6px;"><td style="vertical-align: top; height: 17.6px;"> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"> </p> <p style="line-height: 1.2; margin-top: 0pt; margin-bottom: 0pt;"><strong><span style="font-size: 11pt; font-family: Roboto, sans-serif; color: #000000; white-space-collapse: preserve;"><span style="color: #e67e23;">RESOLUTION: </span></span></strong><span style="color: #000000;"><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;">Super SIM connectivity to the impacted partner has been stable for over an hour. We will mark this incident as closed. If customer continue to experience any issues with connectivity please open a support ticket.</span><span style="font-size: 11pt; font-family: Roboto, sans-serif; white-space-collapse: preserve;"> </span></span></p> </td></tr></tbody></table>   </div></description>
<type>Outage</type>
</extendedProps>
<start>2024-10-01 14:48:24</start>
<end>2024-10-01 16:54:19</end>
<id>340b256497095a90b55e7da71153af6d</id>
<title>No Title</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Super SIM Connectivity Delays Experienced Due To Need To Switch IMSI<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Thursday, January 30, 2025 13:05 UTC / Thursday, January 30, 2025 08:05 EST (UTC-5)<br />End: Thursday, January 30, 2025 16:00 UTC / Thursday, January 30, 2025 11:00 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;"><strong>Description</strong></span>: Starting at 13:05 UTC Super SIM started experiencing connectivity issues with one of our partners that primarily services the European markets. Approximately 10% of data sessions in Europe were dropped, devices have been observed switching to another connectivity partner. 90% of data sessions have recovered. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong><br />Resolution<span style="color: #000000;">: </span></strong><span style="color: #000000;">The issue causing Super SIM connectivity failures has been addressed and services have recovered. Recovery started at 15:10 UTC and normalized at 16:00 UTC, we will continue to monitor for stability. We consider this incident resolved and Super SIM connected devices should be operating normally. </span><span style="color: #000000;"> </span></span></span></p> <p><br /><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Update 1 <span style="color: #000000;">Thursday, January 30, 2025 14:50 UTC / Thursday, January 30, 2025 09:50 EST (UTC-5)</span><span style="color: #000000;">:</span> </strong><span style="color: #000000;">Since 13:05 UTC we have been investigating an issue where devices using Super SIM may experience delays or failures to connect. We see some devices are switching to a different IMSI identity and able to reconnect. We are actively working to identify and resolve the issue. We will provide another update in 2 hours or sooner once more information becomes available.</span><strong>  </strong></span></span></p> <p> </p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-01-30 13:05:00</start>
<end>2025-01-30 16:00:00</end>
<id>4f74e867475f9a504bb639aa116d438e</id>
<title>Super SIM Connectivity Delays Experienced Due To Need To Switch IMSI</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;">Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 05, 2025, 08:30 UTC / Wednesday, March 05, 2025, 03:30 EST (UTC-5)<br /><strong>End:</strong> Wednesday, March 05, 2025, 16:00 UTC / Wednesday, March 05, 2025, 11:00 EST (UTC-5)<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</span></p> <p><span style="font-family: verdana; font-size: 8pt;">Should you experience any problems that may be related to the maintenance, please submit a ticket. </span></p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-05 08:30:00</start>
<end>2025-03-05 16:00:00</end>
<id>50445f7c47c4ead0f6be545c416d431e</id>
<title>KORE Case CS0171954 - Planned Maintenance - Network Migration - 2025-03-05</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"> <span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> 2G/3G data connections<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Thursday, January 02, 2025  13:05 UTC / Thursday, January 02, 2025 08:05 EST (UTC-5)<br /><strong>End:</strong> Thursday, January 02, 2025  18:30 UTC / Thursday, January 02, 2025 13:30 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 13:05 UTC, we are investigating an issue where devices using Super SIM may experience failures with mobility updates and/or new attachments on 2G/3G networks due to a loss of SIGTRAN connectivity. 4G connections appear to be unaffected, and devices configured for 4G-only connections are likely operating normally. However, devices with voice-centric modem configurations may also experience failures. We are actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span><span style="color: #e67e23;"><strong>RESOLUTION </strong></span>: Device connectivity has been stable since the last update. At this time, we consider the issue resolved.</span> </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">UPDATE 2</span> 2025-01-02 18:10 UTC / 2025-01-02 13:10 EST (UTC-5)</strong>:Along with our partner, we have identified and mitigated the issue causing Super SIM 2G &amp; 3G connectivity to fail. Engineers are monitoring as devices recovery their connectivity. We will provide another update in 1 hour.<br /><strong><span style="color: #e67e23;"><br />UPDATE 1</span> 2025-01-02 15:58 UTC / 2025-01-02 10:58 EST (UTC-5)</strong>:The incident causing Super SIM 2G &amp; 3G connectivity issues with one of our partners is still being actively investigated by engineers. Devices that depend on 2G/3G connectivity will be unable to register or perform location updates and appear offline. We are adjusting our impact start time to be 13:05 UTC, 90 minutes earlier than previously stated. Our team is actively working to restore the service with our partner. We will provide another update in 2 hours or sooner once more information becomes available.<br /><br /><br /></span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-01-02 15:05:53</start>
<end>2025-01-02 19:13:59</end>
<id>57e9286a93fe5e104019ba6a6aba1033</id>
<title>Devices using Super SIM may experience connectivity issues on 2G/3G networks</title>
</outages>
<outages>
<extendedProps>
<description><p>Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 10, 2025, 08:30 UTC / Monday, March 10, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Monday, March 10, 2025, 16:00 UTC / Monday, March 10, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-10 08:30:00</start>
<end>2025-03-10 16:00:00</end>
<id>671c12024740e614f6be545c416d4329</id>
<title>KORE Case CS0172620 - Planned Maintenance - Network Migration - 2025-03-10</title>
</outages>
<outages>
<extendedProps>
<description><p>Dear Valued Customer,<br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 12, 2025, 08:30 UTC / Wednesday, March 12, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Wednesday, March 12, 2025, 16:00 UTC / Wednesday, March 12, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-12 08:30:00</start>
<end>2025-03-12 16:00:00</end>
<id>6a0c830a4708e614f6be545c416d4364</id>
<title>KORE Case CS0172808 - Planned Maintenance - Network Migration - 2025-03-12</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"> <br /><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Network Connectivity<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, December 04, 2024, 06:14 UTC / Wednesday, December 04, 2024, 01:14 EST (UTC-5)<br /><strong>End:</strong> Wednesday, December 04, 2024, 08:19 UTC / Wednesday, December 04, 2024, 03:19 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Beginning at 06:14am UTC, we began experiencing a 5.5% drop in data sessions with Super SIM. Devices may encounter a delay when attempting to establish a connection during this time. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 2 hours or sooner if additional information becomes available.<br /><br /><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> Active data sessions on Super SIM has been resolved and it is operating normally at this time.<br /><br /><strong><span style="color: #e67e23;">Update 1:</span> 2024-12-04 08:04 UTC / 2024-12-04 03:04 EST (UTC-5):</strong> Connectivity with Super SIM has been stable since around 07:06am UTC. At this time we do not see connectivity delays and the impacted traffic continues to recovery. We will continue to monitor the platform. If your devices continue to experience problems we suggest that customers reset the connectivity through the Super SIM console. This can often help re-establish a stable connection for the affected devices.<br /></span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-12-04 06:14:00</start>
<end>2024-12-04 08:19:00</end>
<id>6db525cdc31a12d066071d63e40131a7</id>
<title>Drop in Data Sessions with Super SIM - 2024-12-04</title>
</outages>
<outages>
<extendedProps>
<description><p><strong><span style="color: #e67e23;">Who</span></strong><br /><span style="color: #000000;">Impacted Customer Solutions: Super SIM </span><br /><span style="color: #000000;">Impacted Services: DataLimit and ReadySimActivation Functionality Degraded</span><br /><span style="color: #000000;"> </span></p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><span style="color: #000000;">Start: Friday, October 11th, 2024, 16:00 UTC /   Friday, October 11th, 2024, 12:00 EDT (UTC-4)</span><br /><span style="color: #000000;">End:  Monday, October 14th, 2024, 20:45 UTC /   Monday, October 14th, 2024, 16:45 EDT (UTC-4)</span><br /><span style="color: #000000;"> </span></p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;">Description: We have detected a potential issue with SuperSim (DataLimit and ReadySimActivation functionalities are 100% down since Friday 11th October). Our engineering team has been alerted and is actively investigating. We will provide the update in 1 hour. le. <br /></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">RESOLUTION: </span>2024-10-14 16:30 UTC / 2024-10-14 12:30 EDT(UTC-4): </span></span></span></span></span></span></span></span></span></span></span></span></span></span></strong></span>We encountered an issue between Friday, October 11th, and 20:45 UTC that affected the Super SIM <em>Data Limit</em> and <em>Ready Sim Activation</em> functionalities. While connectivity remained unaffected, the following scenarios may have occurred:</p> <ul style="list-style-position: inside;"><li>SIM cards that reached their data limits during this period might not have been blocked as expected.</li><li>SIM cards that should have transitioned from <em>ready</em> to <em>active</em> after consuming a set amount of data remained in the <em>ready</em> state.</li></ul> <p>We are pleased to report that we have fully recovered from these issues. As of now, any SIM cards that should have been blocked or activated have been updated to reflect the correct state. All functionalities are operating normally.</p> <p>We apologize for any inconvenience caused. If you have further concerns, please contact our support team for assistance.</p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 3 </span>2024-10-14 16:30 UTC / 2024-10-14 12:30 EDT(UTC-4): </span></span></span></span></span></span></strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;"><span style="color: #000000;">The issue has been identified and the Engineering suggested fix has been implemented and in-progress. We will continue to monitor and provide further updates in next 8 hours. </span></span></span></span></span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;"><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 2 </span>2024-10-14 12:30 UTC / 2024-10-14 08:30 EDT(UTC-4): </span></span></strong><span style="color: #e67e23;"><span style="color: #000000;">The issue has been identified and the Engineering suggested fix has been implemented and in-progress. We will continue to monitor and provide further updates in next 4 hours. </span></span></span></p> <p><span style="color: #000000;"><strong><span style="color: #e67e23;">UPDATE 1 </span>2024-10-14 07:37 UTC / 2024-10-14 03:37 EDT(UTC-4): </strong>Our team has deployed the fix. The system started processing the backlog of delayed events. </span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-10-11 16:00:00</start>
<end>2024-10-15 00:45:23</end>
<id>77014bacc3d1161066071d63e4013163</id>
<title>No Title</title>
</outages>
<outages>
<extendedProps>
<description><p>Dear Valued Customer,</p> <p>We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> <span>Wednesday, February 26, 2025, 07:00 UTC / Wednesday, February 26, 2025, 02:00 EST (UTC-5)</span><br /><strong>End:</strong> <span>Wednesday, February 26, 2025, 16:00 UTC / Wednesday, February 26, 2025, 11:00 EST (UTC-5)</span> </p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> <span>KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.<br /><br /></span><span>Should you experience any issues that may be related to the maintenance, please submit a ticket.</span> </p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-02-26 07:00:00</start>
<end>2025-02-26 16:00:00</end>
<id>792fb9678333de90dbeac410feaad396</id>
<title>KORE Case CS0169738 - Planned Maintenance - Network Migration - 2025-02-26</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM<br />Impacted Services: Data connectivity.</p> <p><strong><span style="color: #e67e23;">When</span></strong><br />Start: Tuesday, February 11, 2025 22:07 UTC / Tuesday, February 11, 2025 17:07 EST (UTC-5)</p> <p>End: Wednesday, February 12, 2025 05:00 UTC / Wednesday, February 12, 2025 00:00 EST (UTC-5)</p> <p><strong><span style="color: #e67e23;">What</span></strong><br />Description: Since 22:07 UTC we are investigating an issue where devices using Super SIM may experience connectivity issues (i.e.: failures to attach, increased latency). We are actively working to identify and resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.</p> <p><span style="color: #e67e23;"><strong>RESOLUTION</strong></span>:Traffic between our system and the network has now returned to normal levels. Devices should no longer be experiencing frequent disconnections, and overall connectivity should be stable. The team will continue to monitor the situation closely, but the incident is considered resolved.</p> <p><strong><span style="color: #e67e23;"><br />UPDATE 6</span> 2025-02-12 04:22 UTC / 2025-02-11 23:22 EST (UTC-5)</strong>: KORE Engineers are closely monitoring the recovery process, as normal levels have yet to be fully restored. The team is actively working to resolve the issue, with ongoing collaboration with our connectivity partner. We will provide another update within the next hour or sooner, as more information becomes available.</p> <p><strong><span style="color: #e67e23;">UPDATE 5</span> 2025-02-12 03:22 UTC / 2025-02-11 22:22 EST (UTC-5)</strong>: KORE Engineers are still monitoring recovery progress, though traffic and sessions have not yet returned to normal levels. Ongoing collaboration with our connectivity partner will continue until the issue is fully resolved. Further updates will be shared within the next hour or sooner, as more information becomes available.<br /><strong><span style="color: #e67e23;"><br />UPDATE 4 </span>2025-02-12 02:22 UTC / 2025-02-11 21:22 EST ( UTC-5)</strong>: Since our last update, we are beginning to observe signs of recovery. Some devices that need to make new attachments or are highly mobile may experience connectivity failures or delays, established connections should be stable. KORE engineers are actively working with our connectivity partners to address the issue. We will provide another update within the next hour or sooner, as more information becomes available.<br /><strong><span style="color: #e67e23;"><br />UPDATE 3 </span>2025-02-12 01:22 UTC / 2025-02-11 20:22 EST ( UTC-5):</strong> KORE engineers are continuing to collaborate with our connectivity partners to resolve the issue. We are seeing stabilization of the traffic in some cases, and traffic for some IMSI ranges continues to be throttled to help recover the spikes on signaling from our upstream dependencies. An additional update will be provided within the next hour or sooner, as more information becomes available.<br /><br /><strong><span style="color: #e67e23;">UPDATE 2 </span>2025-02-12 00:22 UTC / 2025-02-11 19:22 EST( UTC-5):</strong> KORE engineers are continuing to collaborate with our connectivity partners to resolve the issue. Currently, traffic for some IMSI ranges might be throttled to help recover the spikes on signaling from our upstream dependencies. An additional update will be provided within the next hour or sooner, as more information becomes available.</p> <p><strong><span style="color: #e67e23;"><br />UPDATE 1</span> 2025-02-11 23:22 UTC / 2025-02-11 18:22 EST ( UTC-5)</strong> : The investigation into the incident affecting devices using Super SIM, leading to connectivity issues such as attachment failures and increased latency, is ongoing. We are collaborating with our connectivity partners to restore service. At its peak, approximately 70% of data sessions were lost, with some now having recovered. We will provide another update within an hour or sooner as more information becomes available.<br /><br /><br /></p></description>
<type>Outage</type>
</extendedProps>
<start>2025-02-11 22:59:58</start>
<end>2025-02-12 05:19:18</end>
<id>7c2018af47e35a109dc0d9f4116d431f</id>
<title>Super SIM connectivity issues 2025-02-11</title>
</outages>
<outages>
<extendedProps>
<description><p>Dear Valued Customer,<br /><br />We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Thursday, March 13, 2025, 08:30 UTC / Thursday, March 13, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Thursday, March 13, 2025, 16:00 UTC / Thursday, March 13, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-13 08:30:00</start>
<end>2025-03-13 16:00:00</end>
<id>834d170247c8e614f6be545c416d4367</id>
<title>KORE Case CS0172839 - Planned Maintenance - Super SIM - Network Migration - 2025-03-13</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"> <span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Network Connectivity<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, December 23, 2024  13:20 UTC / Monday, December 23, 2024, 08:20 EST (UTC-5)<br /><strong>End:</strong> Monday, December 23, 2024 17:50 UTC / Monday, December 23, 2024, 12:50 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Since 01:20 PM UTC, we are experiencing Super SIM connectivity issues. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">RESOLUTION: </span></strong><span style="color: #000000;">Device connectivity has been stable since the last update. At this time, we consider the issue resolved. </span></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">UPDATE 2</span> 2024-12-23 18:10 UTC / 2024-12-23 13:10 EST (UTC-5) :</strong>The issue causing Super SIM connectivity issues has been identified. An increase in traffic caused an issue with latency within our platform. Services were scaled up and traffic started to return to normal. We are monitoring services and connectivity as systems recover. We&#39;ll post a resolution in an hour or two so long as things stay stable.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">UPDATE 1</span> 2024-12-23 15:28 UTC  / 2024-12-23 10:28 EST (UTC-5)</strong> : Since 1:20 PM UTC we are experiencing Super SIM connectivity issues primarily in the EU region. Some customer devices may be experiencing failures when trying to attach to the network. Additionally, devices that are mobile and may change their registration location would failure to perform procedures needed to update their location. Impacted devices would lose their data connectivity. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hours or sooner once more information becomes available.</span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-12-23 14:38:40</start>
<end>2024-12-23 19:38:05</end>
<id>8e25011bc3a2d690e431bd059901314a</id>
<title>Super SIM Network Connectivity Issues 2024-12-23</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Super SIM Connectivity Data Session Drop - RESOLUTION </strong></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Super SIM Connectivity<br /> <br /><strong>When</strong><br />Start: Thursday, February 06, 2025, 01:23 UTC / Wednesday, February 05, 2025, 20:23 EST (UTC-5)<br />End: Thursday, February 06, 2025, 03:00 UTC / Wednesday, February 05, 2025, 22:00 EST (UTC-5)</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> <br /><strong>What</strong><br /><strong>Description</strong>: Starting at 01:23 am/pm UTC we&#39;ve been experiencing Super SIM connectivity issues with one of our partners the region of Europe. We estimate approximately 3% of data sessions were dropped. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>RESOLUTION:</strong> <br />We are now seeing recovery of the network connectivity issue. There was a spike in traffic after a spiker maintenance window that was not expected to have impact. Metrics have normalized as of 02:40 UTC. We are continuing to monitor for service stability but consider the incident resolved.</p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-02-06 01:23:00</start>
<end>2025-02-06 03:00:00</end>
<id>916d4a61c3239a10e431bd059901319a</id>
<title>Super SIM Connectivity Data Session Drop</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 10pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Super SIM Usage and Billing<br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Tuesday, March 4, 2025 22:00 UTC / Tuesday, March 4, 2025 17:00 EST (UTC-5)<br /><strong>End:</strong> Wednesday, March 5, 2025 17:51 UTC / Wednesday, March 5, 2025 12:51 EST (UTC-5) <br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description</strong>: On-call engineers are investigating reports of discrepancies in results from the Super SIM /Usage Records APIs and results shown in Data Insights in Console. It appears that in some cases, empty results are being returned. We&#39;ll provide update in 1 hour or as new information is found. <br /><br /></span></p> <p><span style="font-size: 10pt;"><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> On March 3rd, our team deployed a patch that introduced an issue for requests with <code>granularity&#61;all</code>. Specifically, when the requested data range was exactly one day, the system returned an empty response.</span></p> <p><strong><span style="font-size: 10pt;">Example request parameters:</span></strong></p> <ul style="list-style-position: inside;"><li style="font-size: 10pt;"><span style="font-size: 10pt;">StartTime: 2025-02-20T00:00:00.000Z</span></li><li style="font-size: 10pt;"><span style="font-size: 10pt;">EndTime: 2025-02-21T00:00:00.000Z</span></li></ul> <p><span style="font-size: 10pt;">We continue to observe stability after our engineering team remedied the issues. The system is now operating as expected, and we are confident that this issue has been resolved.</span></p> <p><span style="font-size: 10pt;">If your requests follow this pattern (granularity&#61;all with a one-day range), please verify your data and update it if needed.<br /><br /></span></p> <p><span style="font-family: verdana; font-size: 10pt;"> <br /><strong><span style="color: #e67e23;">UPDATE 1</span> 2025-03-05 17:55 UTC / 2025-03-05 12:55 EST (UTC-5):</strong> Our engineering team has deployed a change in how usage results are calculated and are continuing to test. We will provide another update within the next hour or sooner as new information becomes available. <br /></span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-03-05 16:55:53</start>
<end>2025-03-05 20:12:49</end>
<id>9173502647886e149dc0d9f4116d430a</id>
<title>Super SIM Usage Results Inconsistencies - 2025-03-04</title>
</outages>
<outages>
<extendedProps>
<description><p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Data Sessions<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>When</strong><br />Start: Tuesday, November 5, 2024 03:05 UTC / Monday, November 4, 2024 22:05 EST (UTC-5)</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">End:  Tuesday, November 5, 2024 06:07 UTC / Tueday, November 5, 2024 01:07 EST (UTC-5)<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>What</strong><br />Description: Beginning at 3:05am UTC, we observed ~9.5% of active data sessions on Super SIM being dropped. Devices that attempted to reconnect immediately after losing connectivity should have been able to successfully reconnect to the redundant instances while the impacted one recovered. Our engineering team is actively working on identifying and resolving the issue. We will provide another update in 1 hour or sooner once more information becomes available. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">UPDATE 1 2024-11-05 04:46 UTC / 2024-11-04 23:46 EST (UTC-5) : Our engineering team is actively working on identifying and resolving the issue. We will provide another update in 2 hours or sooner once more information becomes available. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">UPDATE 2 : 2024-11-05 05:37 UTC / 2024-11-05 00:37 EST (UTC-5) We are seeing recovery on active data sessions on Super SIM. We will continue to monitor for system stability. We&#39;ll provide another update in 30 minutes or as soon as more information becomes available.</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">RESOLVED : Active data sessions on Super SIM has been resolved and it is operating normally at this time. </p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-11-05 03:53:18</start>
<end>2024-11-05 06:15:19</end>
<id>9b252babc3e592d0e431bd059901313b</id>
<title>No Title</title>
</outages>
<outages>
<extendedProps>
<description><p> </p> <p><span style="color: #e67e23;"><strong>WHO</strong></span></p> <p>Impacted Customer Solutions: Super SIM and Programmable Wireless Customers<br />Impacted Services: Access to Super SIM UI and delays with usage and billing reporting and Programmable Wireless Provisioning</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Wednesday, December 11, 2024 05:30 UTC / Wednesday, December 11, 2024 00:30 EST ( UTC-5)<br />End:  Wednesday, December 11, 2024 09:32 UTC / Wednesday, December 11, 2024 04:32 EST ( UTC-5) <br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br />Description: Beginning at 05:30 UTC, customers will experience issues as indicated below: <br />For super sim: Customers will face issues accessing the Super SIM UI, and experience delays with usage and billing reporting <br />For Programmable Wireless customers may encounter delays in provisioning activities </p> <p>We will provide another update once more information becomes available.<br /><br /></p> <p><span style="color: #e67e23;"><strong>RESOLUTION</strong></span>:Service outage has been resolved and services have been fully restored. KORE engineers monitored and confirmed network stability.</p> <p><strong><span style="color: #000000;"><span style="color: #e67e23;">UPDATE 2</span> 2024-12-11 08:30 UTC / 2024-12-11 03:30 EST (UTC-5)</span>:</strong> Our network engineering team is still actively investigating the ongoing issue with high priority.We will continue to keep you informed as soon as more information becomes available.</p> <p><strong><span style="color: #e67e23;">UPDATE 1 </span>2024-12-11 07:34 UTC / 2024-12-11 02:34 EST (UTC-5):</strong>Our network engineering team has confirmed an ongoing issue with the Internet Bandwidth and DCI business services. Further information will be shared as the investigation progresses. </p> <p> </p> <p> </p></description>
<type>Outage</type>
</extendedProps>
<start>2024-12-11 06:19:25</start>
<end>2024-12-11 09:47:59</end>
<id>9e2fd95f935212504019ba6a6aba1007</id>
<title>INC0142394 - Outage - SUPERSIM and Programmable Wireless 2024-12-11</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: 2G/3G/LTE data connections<br /> <br /><strong>When</strong><br />Start: Thursday, January 16, 2025  13:30 UTC / Thursday, January 16, 2025 08:30 EST (UTC-5)<br />End: Friday, January 17, 2025 02:25 UTC / Thursday, January 16, 2025 21:25 EST (UTC-5)<br /> <br /><strong>What</strong><br />Description: Since 13:30 UTC we are experiencing Super SIM connectivity issues with a number of devices starting their data connection repeatedly. Our engineering team is actively investigating to resolve the issue. Approximately 3% of connections have failed, with those devices still offline. We will provide another update in 1 hour or sooner once more information becomes available.<br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;">RESOLUTION:  </span></strong><span style="color: #000000;">As of 01:00 UTC, device connectivity for Super SIM is growing at a stable rate. We&#39;ll continue to monitor the devices as they reattach, at this time we are closing the incident. If you have devices that are still not reconnecting, please try sending a &#34;Reset Connectivity&#34; command from the Super SIM console for a few SIMs in the console to prompt them to re-register to the network. <br /></span><strong><span style="color: #e67e23;"><br />UPDATE 5</span> 2025-01-17 00:09 UTC / 2025-01-16 19:09 EST (UTC-5</strong>): We continue to see recovery of the network connectivity issue for Super SIM. Device data sessions continue to recover towards pre-incident levels. If you have devices that are not reconnecting, please try sending a Reset Connectivity for a few SIMs in the console to force them to register to the network again. We will provide another update in 4 hours or sooner once more information becomes available </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;"><br />UPDATE 4</span> 2025-01-16 21:41 UTC / 2025-01-16 16:41 EST (UTC-5)</strong>: As of 20:20 UTC, signaling traffic levels have returned to pre-incident levels. This typically indicates that devices attempting to reconnect should now be able to establish stable data sessions.Our engineering team continues to work closely with the affected network provider to fully resolve the issue. If any SIM cards are still experiencing connectivity problems, we recommend resetting their connectivity through the console, as this often helps re-establish a stable connection. We will provide another update in 2 hours or sooner if more information becomes available. </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;"><br />UPDATE 3</span> 2025-01-16 19:50 UTC / 2025-01-16 14:50 EST (UTC-5)</strong>: Engineers continue to investigate the cause of the Super SIM connectivity issue. At peak, approximately 28.9% of SIMs had their data sessions impacted. Those impacted devices may face increased reattachment attempts if they are always powered on, while devices with long sleep cycles may encounter difficulty attaching to the network during short connection attempts. We will provide another update within the next 4 hours or sooner as new information becomes available.</span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong><br />UPDATE 2</strong></span> <strong>2025-01-16 17:50 UTC / 2025-01-16 12:50 EST (UTC-5):</strong> Our engineering team continue to collaborate with the carrier partner to resolve the issue. Some devices using the IMSI from the affected partner may face increased reattachment attempts if they are always powered on, while devices with long sleep cycles may encounter difficulty attaching to the network during short connection attempts. We will provide another update within the next 2 hours or sooner as new information becomes available. </span></p> <p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>UPDATE 1</strong></span>: <strong>2025-01-16 15:47 UTC / 2025-01-16 10:47 EST (UTC-5)</strong>: Since 13:30 UTC, we have been experiencing Super SIM connectivity issues with one of our partners. Some devices using the IMSI from the affected partner may face increased reattachment attempts if they are always powered on, while devices with long sleep cycles may encounter difficulty attaching to the network during short connection attempts. Our engineering team is actively collaborating with the partner to resolve the issue. We will provide another update within the next 2 hours or sooner as new information becomes available.  <br /></span></p> <p> </p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-01-16 14:35:02</start>
<end>2025-01-17 02:32:37</end>
<id>a77ae0c7478356104bb639aa116d431d</id>
<title>Super SIM Network Connectivity Issues</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> Super SIM <br /><strong>Impacted Services:</strong> Super SIM usage and billing</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Thursday, February 27, 2025, 11:00 UTC / Thursday, February 27, 2025, 06:00 EST (UTC-5)<br /><strong>End:</strong> Friday, February 28, 2025, 18:00 UTC / Friday, February 28, 2025, 13:00 EST (UTC-5)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> Beginning around 11:00 UTC / 06:00 EST (UTC-5) on February 27, 2025, the Super SIM UsageRecord API was returning incorrect results for requests with the Granularity parameter set to &#34;all&#34;, which is the default value for it. If requests were made with a StartTime that was not UTC midnight (e.g. 01:30 UTC), the first entire day was excluded from the results as the start time was rounded up to the nearest UTC day. Depending on the range of your request, you could have received empty results.</p> <p>Our engineering team remedied the issue and results are now being returned that are properly in line with the /UsageRecords API documentation. The issue was resolved around 18:00 UTC / 13:00 EST (UTC-5) on February 28, 2025.</p> <p>If you retrieved usage data during this period from the /UsageRecords API, you may need to rerun your processes with the corrected results.<br /><br />Our engineers are continuing to monitor the situation and will post an update in 1 hour.</p> <p><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> We continue to observe stability after our engineering team has remedied the issues and continues to operate as expected. We are confident that this issue is resolved.</p> <p> </p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-02-28 21:40:05</start>
<end>2025-03-01 00:38:27</end>
<id>ae45a7b04788ead0f6be545c416d43c8</id>
<title>Super SIM UsageRecords Returning Incorrect Results for Some Requests</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Wednesday, March 19, 2025, 08:30 UTC / Wednesday, March 19, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Wednesday, March 19, 2025, 16:00 UTC / Wednesday, March 19, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description</strong>: KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any problems that may be related to the maintenance, please submit a ticket.</p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-19 08:30:00</start>
<end>2025-03-19 16:00:00</end>
<id>b639087083502a50dbeac410feaad30d</id>
<title>KORE Case CS0175883 - Planned Maintenance - Network Migration - Super SIM - 2025-03-19</title>
</outages>
<outages>
<extendedProps>
<description><p>Dear Valued Customer,</p> <p>We would like to inform you about the following planned maintenance involving the migration of network elements from one platform to another.</p> <p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, February 24, 2025, 07:00 UTC / Monday, February 24, 2025, 02:00 EST (UTC-5)<br /><strong>End:</strong> Monday, February 24, 2025, 12:00 UTC / Monday, February 24, 2025, 07:00 EST (UTC-5)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. The KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p>Should you experience any issues that may be related to the maintenance, please submit a ticket.</p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-02-21 21:20:00</start>
<end>2025-02-24 12:00:00</end>
<id>bd7b5fe64737d690f6be545c416d43bc</id>
<title>KORE Case CS0169496 - Planned Maintenance - Network Migration - 2025-02-24</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions:</strong> KORE Super Core Network<br /><strong>Impacted Services:</strong> Data - No expected impact</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Monday, March 24, 2025, 08:30 UTC / Monday, March 24, 2025, 04:30 EDT (UTC-4)<br /><strong>End:</strong> Monday, March 24, 2025, 16:00 UTC / Monday, March 24, 2025, 12:00 EDT (UTC-4)</p> <p><span style="color: #e67e23;"><strong>What</strong></span><br /><strong>Description:</strong> KORE will be conducting network maintenance on the indicated maintenance window. This will involve migrating network elements for the Super SIM product to KORE&#39;s infrastructure. KORE Engineers will closely monitor the process to ensure a successful maintenance.</p> <p> </p></description>
<type>Maintenance</type>
</extendedProps>
<start>2025-03-24 08:30:00</start>
<end>2025-03-24 16:00:00</end>
<id>c5a5961e479422d4f6be545c416d4371</id>
<title>KORE Case CS0176654 - Planned Maintenance - Network Migration - 2025-03-24</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="color: #e67e23;"><strong>Who</strong></span><br /><strong>Impacted Customer Solutions: </strong>Super SIM<br /><strong>Impacted Services:</strong> Super SIM Usage Reporting</p> <p><span style="color: #e67e23;"><strong>When</strong></span><br /><strong>Start:</strong> Saturday, December 28, 2024 00:00 UTC / Friday, December 27, 2024 19:00 EST ( UTC-5)<br /><strong>End:</strong> Friday, February 28, 2025 09:45 UTC / Friday, February 28, 2025 04:45 EST (UTC-5)</p> <p><strong><span style="color: #e67e23;">What</span></strong><br /><strong>Description:</strong> We have identified errors in the amount of data usage reported in the Super SIM Console and from the Super SIM UsageRecords API. The period of impact appears to be between December 28, 2024 and January 29, 2025. Data usage reported from these tools does not reconcile to the original usage records. The issue appears to be with the usage aggregation and reporting system that powers these tools. The amounts charged to your invoice properly reconcile to the original usage records.</p> <p>As part of our migration from Twilio to KORE, we&#39;re migrating to a new usage and aggregation service operated by KORE. Due to the active migration, we do not expect to be able to fix the variances in the current usage reporting service. Our engineers and product are working on confirming that amounts in the new usage system properly reconcile to the amounts charged and accelerating the migration to the service so that you can get the correct amounts for the impacted period. We will provide an update in 24 hours.</p> <p><span style="color: #e67e23;"><strong>RESOLUTION:</strong></span> <span>Our engineering team concluded that the new data source is fully operational and stable across all endpoints. The incident is now resolved.</span> <br /><br /><strong><span style="color: #e67e23;">UPDATE 4</span> 2025-02-27 09:45 UTC / 2025-02-27 04:45 EST (UTC-5):</strong> Our Engineering team has successfully switched all remaining traffic to the new data source. As a result, the Console UI, KORE API, and Twilio API are now displaying accurate data. The team will continue monitoring the system for the next 24 hours before closing the incident.  <br /><br /><strong><span style="color: #e67e23;">UPDATE 3 <span style="color: #000000;">2025-02-26 08:30 UTC / 2025-02-26 03:30 EST (UTC-5): </span></span></strong><span style="color: #e67e23;"><span style="color: #000000;">Our engineering team has successfully switched the KORE Super SIM/UsageRecords API to our new data source that is returning the correct usage data for the impacted period. However, please note that the Twilio/UsageRecords API endpoint remains connected to the legacy data source containing the incorrect usage amounts for the impacted period. The legacy data will not be corrected. If you need to retrieve the corrected usage data for the impacted period for your application, you will need to migrate to the KORE/UsageRecords API. We will continue to monitor this situation and provide an update in 24 hours.</span></span><span style="color: #e67e23;"><span style="color: #000000;"> <br /><br /></span></span><strong><span style="color: #e67e23;">UPDATE 2</span> 2025-02-25 13:40 UTC / 2025-02-25 08:40 EST (UTC-5):</strong> Our engineering team is working to make the correct data available via the KORE Super SIM/UsageRecords API. This may be available as early as this week. We expect the corrected results to only be available through the KORE API endpoint, not from the Twilio Super SIM/UsageRecords API. This is due our ongoing infrastructure migration and related limitations. To retrieve the corrected information you may need to accelerate your API migration plan. We will provide further details once our resolution plan is finalized. We will provide another update in 24 hours. <br /><br /><strong><span style="color: #e67e23;">UPDATE 1</span> 2025-02-19 16:26 UTC / 2025-02-19 11:26 EST (UTC-5):</strong> For KORE Super SIM Console Data Insights, we have switched to using the new usage aggregation and reporting system. Results there should now reconcile to invoices. If you continue to see any variances, please contact KORE customer support. Requests to the UsageRecords API endpoint are still being handled by the previous system and may return variances for the impacted period noted earlier. Our team is continuing to work on the accelerated migration plan to switch all requests to the new system. We will provide another update in 24 hours. </p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-02-18 16:29:48</start>
<end>2025-02-28 22:05:35</end>
<id>ca7c32e197fbd290d038301e6253af33</id>
<title>Super SIM Usage Reporting Errors</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Super SIM Connectivity Delays Experience <br /> <br /><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Wednesday, January 29, 2025 23:17 UTC / Tuesday, January 29, 2025 18:17 EST (UTC-5)<br />End: Thursday, January 30, 2025 01:19 UTC / Tuesday, January 29, 2025 20:19 EST (UTC-5)<br /> <br /><span style="color: #e67e23;"><strong>What</strong></span><br /><span style="color: #000000;"><strong>Description</strong></span>: Starting at 23:17 UTC Super SIM started experiencing connectivity issues with one of our partners that primarily services the European markets. Approximately 25% of data sessions in Europe were dropped, devices have been observed switching to another connectivity partner. 70% of data sessions have recovered. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 1 hour or sooner once more information becomes available. <br /></span></p> <p><span style="font-family: verdana; font-size: 8pt;"><strong><span style="color: #e67e23;"><br />RESOLUTION</span></strong>: The issue causing Super SIM connectivity delays has been addressed and services have recovered. The impacted connectivity metrics have returned to normal and we will be monitoring for stability. We consider this incident resolved and Super SIM connected devices should be operating normally.  </span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2025-01-29 23:17:31</start>
<end>2025-01-30 01:19:31</end>
<id>cf40799f47135a504bb639aa116d4394</id>
<title>SuperSIM Connectivity Delays Experience</title>
</outages>
<outages>
<extendedProps>
<description><p><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Network Connectivity</p> <p><strong>When</strong><br /><strong>Start</strong>: Monday, December 02, 2024, 13:00 UTC / Monday, December 02, 2024, 08:00 EST (UTC-5)</p> <p><strong>End</strong>: Monday, December 02, 2024, 16:00 UTC / Monday, December 02, 2024, 11:00 EST (UTC-5)</p> <p><strong>What</strong><br /><strong>Description</strong>: Beginning at 13:00 UTC, we began experiencing delays in devices connecting to the network due to issues with the primary IMSIs on Super SIM. Devices may encounter a delay (between 3 to 9 minutes) when attempting to establish a connection as the SIMs switch over to backup IMSIs in order to restore full connectivity. Our engineering team is actively working with the affected network provider to resolve the issue. We will provide another update in 2 hours or sooner if additional information becomes available.</p> <p><strong>UPDATE 1 2024-12-02 17:14 UTC / 2024-12-02 12:14 EST ( UTC-5)</strong>:Engineers observed recovery starting around 16:00 UTC. Devices that restart regularly due to their use case should no longer experience delays in connecting while waiting for the IMSI to change. Devices that do not restart regularly will remain on the alternate IMSI for up to 24 hours before switching back. At this time, we continue to monitor recovery and do not see further impact. We will provide another update in 2 hours or sooner if additional information becomes available. </p> <p><strong>RESOLUTION</strong>: <span>Connectivity with Super SIM has been stable since around 16:00 UTC. At this time we do not see connectivity delays and the impacted traffic continues to recovery. We will continue to monitor the platform, however at this time we consider this incident resolved. If your devices continue to experience any problems, we suggest that customers reset the connectivity through the Super SIM console. This can often help re-establish a stable connection for the affected devices.</span></p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-12-02 15:53:55</start>
<end>2024-12-02 19:17:31</end>
<id>e4fc0dacc39ada9066071d63e40131d0</id>
<title>Connectivity Delays on Super SIM - 2024-12-02</title>
</outages>
<outages>
<extendedProps>
<description><p> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>Who</strong><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Data Sessions<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>When</strong><br />Start: Tuesday, October 22, 2024, 07:35 UTC / Tuesday, October 22, 2024, 03:35 EDT (UTC-4)<br />End:  <span style="font-size: 11.0pt; line-height: 107%; font-family: Aptos, sans-serif;">Tuesday, October 22, 2024, 08:14 UTC / Tuesday, October 22, 2024, 04:14 EDT (UTC-4)</span> <br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>What</strong><br />Description: Starting at 07:35am UTC our monitoring system have detected that we lost about 8% of active PDN sessions in the US. We are seeing recovery as of the moment. Engineering team has been alerted and is actively investigating.</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong><span style="font-size: 11.0pt; line-height: 107%; font-family: Aptos, sans-serif;">RESOLUTION: </span></strong><span style="font-size: 11.0pt; line-height: 107%; font-family: Aptos, sans-serif;">Issue has been resolved and PDN sessions are back to pre-incident levels.</span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong>UPDATE 1 2024-10-22 08:00 UTC / 2024-10-22 04:00 EDT (UTC-4): </strong>We are seeing recovery and missing less than 3% of Active PDN sessions in the US. </p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-10-22 07:35:00</start>
<end>2024-10-22 08:14:00</end>
<id>e85f9cd7c3599610e431bd05990131d4</id>
<title>No Title</title>
</outages>
<outages>
<extendedProps>
<description><p><span style="font-family: verdana; font-size: 8pt;"> </span></p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><span style="color: #e67e23;"><strong>Who</strong></span><br />Impacted Customer Solutions: Super SIM <br />Impacted Services: Login and functionality issues of multiple systems including KORE Console, Super SIM Console, and APIs. <br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><span style="color: #e67e23;"><strong>When</strong></span><br />Start: Thursday, November 07, 2024  18:10 UTC / Thursday, November 07, 2024  13:10 EST (UTC-5)</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;">End:  Thursday, November 07, 2024  19:49 UTC / Thursday, November 07, 2024  14:49 EST (UTC-5)<br /> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><span style="color: #e67e23;"><strong>What</strong></span><br />Description: We are investigating a problem impacting multiple systems including KORE Console, Super SIM Console, and APIs. Users may experience unexpected errors when trying to log in or manage resources through these systems. </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong><span style="color: #e67e23;">UPDATE 1</span> 2024-11-07 19:19 UTC / 2024-11-07 14:19 EST (UTC-5).</strong> KORE Engineers advised they are no longer seeing issues and will closely monitor the stability in the next 30 minutes.</p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"> </p> <p style="margin: 0in 0in 8pt; line-height: 107%; font-size: 11pt; font-family: Aptos, sans-serif;"><strong><span style="color: #e67e23;">RESOLUTION:</span> </strong>All services are now back to normal and confirmed to be stable</p></description>
<type>Degradation</type>
</extendedProps>
<start>2024-11-07 19:08:48</start>
<end>2024-11-07 19:58:47</end>
<id>fea90528c339d6d066071d63e4013128</id>
<title>INC0132335 -Users experiencing errors across multiple systems</title>
</outages>
<serviceDisplay>Super SIM</serviceDisplay>
</data>
<roles>snc_internal,snc_external</roles>
<link>function(scope, elem) { var setFocusItem = function(item) { $(elem).find("button[data-toggle='tooltip']").attr('tabindex', '-1'); item.attr('tabindex', '0'); item.focus(); }; $(elem).on('focus blur', "button[data-toggle='tooltip']", function(e) { if (e.originalEvent.type === 'focus') $(e.target).addClass('active'); else $(e.target).removeClass('active'); }); $(elem).on('keydown', 'ul li button', function(e) { var target = e.target; var allToolTips = $(elem).find("button[data-toggle='tooltip']"); var firstToolTip = allToolTips.first(); var lastToolTip = allToolTips.last(); var isLeftRightArrowKey = false; var toolTipItemToFocus; if (e.keyCode == 37) { isLeftRightArrowKey = true; var previousDay = $(target).parent().prevAll('li').first(); var previousToolTip = previousDay.find("[data-toggle='tooltip']"); //enable circular navigation toolTipItemToFocus = previousToolTip.length ? previousToolTip : lastToolTip; } else if (e.keyCode == 39) { isLeftRightArrowKey = true; var nextDay = $(target).parent().nextAll('li').first(); var nextToolTip = nextDay.find("[data-toggle='tooltip']"); //enable circular navigation toolTipItemToFocus = nextToolTip.length ? nextToolTip : firstToolTip; } if (isLeftRightArrowKey) { e.preventDefault(); $(target).removeClass('active'); setFocusItem(toolTipItemToFocus); } }); }</link>
<rectangle_id>0d1015714728aad0ab11f92c016d43eb</rectangle_id>
<_metastack_size>0</_metastack_size>
<option_schema/>
<sys_class_name>sp_widget</sys_class_name>
<sys_id>369f49bd47e4aad0ab11f92c016d432e</sys_id>
<public>true</public>
<client_script>function($scope, $timeout, $compile) { $scope.events = []; $scope.server.get().then(function(response) { var outages = response.data.outages; if (typeof outages[0] === 'string') { outages = outages.map(function(item) { return JSON.parse(item); }); } $scope.events = outages || []; loadFullCalendar(initializeCalendar); }); function loadFullCalendar(callback) { if (typeof FullCalendar === "undefined") { var script = document.createElement('script'); script.src = "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js"; script.onload = callback; document.head.appendChild(script); var css = document.createElement('link'); css.rel = "stylesheet"; css.href = "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/main.min.css"; document.head.appendChild(css); } else { callback(); } } function initializeCalendar() { var calendarEl = document.getElementById('calendar'); if (!calendarEl) { console.error("Calendar element not found!"); return; } var formattedEvents = $scope.events.map(function(event) { var eventType = (event.extendedProps && event.extendedProps.type) || "N/A"; var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; var startDate = new Date(event.start); var endDate = event.end ? new Date(event.end) : null; var formatOptions = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true, timeZone: timeZone, timeZoneName: "short" }; var formattedStartDate = startDate.toLocaleString("en-US", formatOptions); var formattedEndDate = endDate ? endDate.toLocaleString("en-US", formatOptions) : "No end date available."; return { id: event.id || "N/A", title: event.title || "No Title", start: startDate, end: endDate || null, timezone: timeZone, color: getEventColor(eventType), allDay: !endDate || startDate.toDateString() === endDate.toDateString(), extendedProps: { type: eventType, description: (event.extendedProps && event.extendedProps.description) || "No description available", displayStartDate: formattedStartDate, displayEndDate: formattedEndDate, timezone: timeZone } }; }); function getEventColor(type) { switch (type) { case 'Outage': return '#a94442'; case 'Degradation': return '#8a6d3b'; case 'Maintenance': return '#57B9FF'; default: return '#eeeeee'; } } var calendar = new FullCalendar.Calendar(calendarEl, { initialView: 'dayGridMonth', headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay' }, views: { dayGridYear: { type: 'dayGrid', duration: { years: 1 }, buttonText: 'Year' } }, events: formattedEvents, eventClick: function(info) { console.log("Event clicked: ", info.event); showPopup(info.event); }, eventDidMount: function(info) { info.el.style.cursor = "pointer"; } }); calendar.render(); } function showPopup(event) { console.log("Event clicked:", event); $scope.selectedEvent = { title: event.title || "No summary available.", type: (event.extendedProps && event.extendedProps.type) || "N/A", start: event.extendedProps.displayStartDate || "No start date available.", end: event.extendedProps.displayEndDate || "No end date available.", timezone: event.extendedProps.timezone || "Unknown Timezone", description: (event.extendedProps && event.extendedProps.description) || "No details available." }; $timeout(function() { $scope.$apply(); $('#outageModal').modal('show'); }); } } </client_script>
<name>Status Page Calendar</name>
<options>
<css> #x0d1015714728aad0ab11f92c016d43eb .panel-title:before { border-radius: .2rem; color: #fff; content: "\f133"; font-family: FontAwesome; font-size: 1.8rem; margin-right: .5rem; padding: .2rem .3rem; } #x0d1015714728aad0ab11f92c016d43eb .panel-title { align-items: center; background-color: #9bcb4c; border-radius: 4px 0; color: $text-color-light; display: flex; flex-direction: row; font-size: 1.6rem; font-weight: 400; padding: 1rem 1.5rem; text-transform: none; width: max-content; } #x0d1015714728aad0ab11f92c016d43eb .bs-callout-success { background-color: tint($brand-accent, 90%); border-color: $brand-accent; }</css>
<color>default</color>
<sp_column>b10dae10c3f99e10fe54f6ff050131d9</sp_column>
<sp_column_dv>1</sp_column_dv>
<active>true</active>
<color_dv>Default</color_dv>
<sys_tags/>
<sys_class_name>sp_instance</sys_class_name>
<size_dv>Medium</size_dv>
<sp_widget_dv>Status Page Calendar</sp_widget_dv>
<size>md</size>
<sp_widget>369f49bd47e4aad0ab11f92c016d432e</sp_widget>
<sys_class_name_dv>Instance</sys_class_name_dv>
<order>1</order>
</options>
<sys_scope>global</sys_scope>
<id>status_page_calendar</id>
<field_list/>
<controller_as>c</controller_as>
<_server_time>0.003</_server_time>
</widget>
<instance_id>0d1015714728aad0ab11f92c016d43eb</instance_id>
<title/>
</widgets>
<class_name/>
<semantic_tag/>
<order>1</order>
</columns>
<class_name/>
<semantic_tag/>
<order>1</order>
</rows>
<class_name/>
<semantic_tag/>
<order>3</order>
</containers>
<page>
<human_readable_url/>
<internal>false</internal>
<css/>
<has_custom_main_tag>false</has_custom_main_tag>
<use_seo_script>false</use_seo_script>
<seo_script_dv/>
<title>Service Status</title>
<sys_tags/>
<sys_class_name>sp_page</sys_class_name>
<sys_id>2726b656d7330200a9addd173e24d493</sys_id>
<omit_watcher>false</omit_watcher>
<public>true</public>
<draft>false</draft>
<sys_name>service_status</sys_name>
<sys_scope>global</sys_scope>
<id>service_status</id>
<category_dv>Other Applications</category_dv>
<category>other</category>
<static_title>Service Status</static_title>
<sys_class_name_dv>Page</sys_class_name_dv>
</page>
<user>
<sys_id>5136503cc611227c0183e96598c4f706</sys_id>
<preferred_language_dv>English</preferred_language_dv>
<user_name>guest</user_name>
<logged_in>false</logged_in>
<can_debug>false</can_debug>
<name>Guest</name>
<can_debug_admin>false</can_debug_admin>
<last_name>Guest</last_name>
<avatar/>
<first_name/>
<email>guest@example.com</email>
<preferred_language>en</preferred_language>
</user>
<announcements>
<summary>Check out this Video to learn How to Reset Your Password, in the new KORE Support Portal. You will only need to Reset Your Password if you are not utilizing ConnectivityPro.</summary>
<roles/>
<dismissed>false</dismissed>
<clickTarget>urlNew</clickTarget>
<title>KORE Support - How to Reset Your Password</title>
<type>Widget</type>
<displayFirst>false</displayFirst>
<targetLinkText>Reset Your Password</targetLinkText>
<valid>true</valid>
<displayStyle>
<backgroundColor>#006ed5</backgroundColor>
<foregroundColor>#ffffff</foregroundColor>
<alignment>LEFT</alignment>
</displayStyle>
<glyph/>
<targetLink>https://storage.pardot.com/729503/1683567788ZGtjIUL3/Reset_Password_in_ServiceNow.mp4</targetLink>
<isPublic>true</isPublic>
<from>1683535480000</from>
<id>0deaef6b9722a510d038301e6253afcc</id>
<dismissOption>DISMISSIBLE</dismissOption>
<newRecord>false</newRecord>
</announcements>
<announcements>
<summary>Check out this Video to learn How to Create a Case, in the new KORE Support Portal.</summary>
<roles/>
<dismissed>false</dismissed>
<clickTarget>urlNew</clickTarget>
<title>KORE Support - How to Create a Case</title>
<type>Widget</type>
<displayFirst>false</displayFirst>
<targetLinkText>Create a Case</targetLinkText>
<valid>true</valid>
<displayStyle>
<backgroundColor>#006ed5</backgroundColor>
<foregroundColor>#ffffff</foregroundColor>
<alignment>LEFT</alignment>
</displayStyle>
<glyph/>
<targetLink>https://storage.pardot.com/729503/1683567875z6MlZ8kK/Submit_Case_ServiceNow.mp4</targetLink>
<isPublic>true</isPublic>
<from>1683535480000</from>
<id>2f7a6f6b9722a510d038301e6253afc7</id>
<dismissOption>DISMISSIBLE</dismissOption>
<newRecord>false</newRecord>
</announcements>
</result>
</response>
