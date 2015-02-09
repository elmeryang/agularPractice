'use strict';

// Declare app level module which depends on views, and components
angular.module('myModule', ['schemaForm'])
       .controller('FormController', function($scope) {
  $scope.schema = {
      "type": "object",
	  "title": "Comment",
	  "required": [
	    "comments"
	  ],
	  "properties": {
	    "comments": {
	      "type": "array",
	      "maxItems": 2,
	      "items": {
	        "type": "object",
	        "properties": {
	          "name": {
	            "title": "Name",
	            "type": "string"
	          },
	          "email": {
	            "title": "Email",
	            "type": "string",
	            "pattern": "^\\S+@\\S+$",
	            "description": "Email will be used for evil."
	          },
	          "spam": {
	            "title": "Spam",
	            "type": "boolean",
	            "default": true
	          },
	          "comment": {
	            "title": "Comment",
	            "type": "string",
	            "maxLength": 20,
	            "validationMessage": "Don't be greedy!"
	          }
	        },
	        "required": [
	          "name",
	          "comment"
	        ]
	      }
	    }
	  }
  };

  $scope.form = [
       "*",
    {
      type: "submit",
      title: "Save"
    }
  ];

  $scope.model = {
   "comments": [
    {
      "spam": true
    }
  ]};
});
