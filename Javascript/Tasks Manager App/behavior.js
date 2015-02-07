/**
 *	Software name: Task Manager
 *	author: Besian Krasniqi
 *	version: 1.0
 *	email: bksoftengineer@gmail.com
 *	website: bksofteng.com
 */

var Task = {
		submit : $("#submit"),
		parent : $("#main"),
        tasks: $("#tasks"),

        toggleState: function(e) {
            var $target = $(e.currentTarget);
            $target.toggleClass("strike");
            e.preventDefault();
        },

		addTask: function (){
            var input = $("#input1").val();
            var div = $("<div class='task'><a href='#'>" + input + "</a><a class='destroy' href='#'><img src='cl1.png' class='imgmn'></a></div>");
            this.tasks.append(div);
            this.clearInput();
        },

        destroy: function(e) {
            var $target = $(e.currentTarget);
            $target.parent().remove();
        },

        clearInput: function() {
            $("#input1").val("");
        }
};

$("#main").on("click", "#submit", Task.addTask.bind(Task));
$("#tasks").on("click", ".task", Task.toggleState.bind(Task));
$("#tasks").on("click", ".destroy", Task.destroy.bind(Task));