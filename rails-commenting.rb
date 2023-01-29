# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is an example of inheritance. The class BlogPostsController is inheriting from the class ApplicationController. This means that BlogPostsController will be able to access attributes and behaviors within ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an instance variable being assigned to BlogPost.all, which will display all the values contained within the model BlogPost.
    @posts = BlogPost.all
  end

  # ---3) Method for the controller action 'show', which displays the details of one specific item. In this case, the method is displaying the details of a column in the model BlogPost, which is specified using the symbol :id, which corresponds to the primary key of the column. This corresponds with the http verb 'get' and the CRUD action of 'read'.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Method for the controller action 'new', which will display a form for the user to fill out in order to create something new. This corresponds to the http verb 'get' and the CRUD action of 'read'.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Method for the controller action 'create', which takes the data that was filled out with 'new' and actually updates the database with that data. This corresponds to the http verb 'post' and the CRUD action of 'create'.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Method for the controller action 'edit', which displays a form for the user to fill out in order to update data that already exists in the database. This corresponds with the http verb 'get' and the CRUD action of 'read'.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) @post.update is using the method of update on the instance variable @post in order to update the database based on the form filled out from the 'edit' controller action. It is passed blog_post_params, which is a strong params that gives permission to the user to only modify data that is specified within the strong params method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Used to redirect the user to the path indicated. In this case, if the user deletes data from the database, the user is then redirected to the route with the alias of 'blog_posts'.
      redirect_to blog_posts_path
    end
  end

  # ---9) Private is used to contain anything below its line to the scope of the current class. In this example, the strong param blog_post_params can only be called on and used within the class of BlogPostsController.
  private
  def blog_post_params
    # ---10) This is a strong param, which provides protections for the database by specifying required attributes that must be filled out in order for the database to be updated. This example is requiring the data of title and content from the model BlogPost.
    params.require(:blog_post).permit(:title, :content)
  end
end
