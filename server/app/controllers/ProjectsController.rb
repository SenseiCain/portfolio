class ProjectsController < ApplicationController
    def index
        projects = Project.all
        render json: projects.to_json(:include => {
            :technologies => {:only => [:title]}
        })
    end
end