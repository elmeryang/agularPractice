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
     {
    "type": "help",
    "helpvalue": "<h4>Array Example</h4><p>Try adding a couple of forms, reorder by drag'n'drop.</p>"
	  },
	  {
	    "key": "comments",
	    "add": "New",
	    "style": {
	      "add": "btn-success"
	    },
	    "items": [
	      "comments[].name",
	      "comments[].email",
	      {
	        "type": "conditional",
	        "condition": "model.comments[arrayIndex].email",
	        "items": [
	          {
	            "key": "comments[].spam",
	            "type": "checkbox",
	            "title": "Yes I want spam."
	          }
	        ]
	      },
	      {
	        "key": "comments[].comment",
	        "type": "textarea"
	      }
	    ]
	  },
	  {
	    "type": "submit",
	    "style": "btn-info",
	    "title": "OK"
	  }
	  ];

	  $scope.model = {
	   "comments": [
	    {
	      "spam": true
	    }
	  ]};
});
