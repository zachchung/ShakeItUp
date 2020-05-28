class DosesController < ApplicationController
  # new_cocktail_dose GET    /cocktails/:cocktail_id/doses/new
  def new
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose = Dose.new
  end

  # cocktail_doses POST   /cocktails/:cocktail_id/doses
  def create
    # raise
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose = Dose.new(dose_params)
    @dose.cocktail = @cocktail
    if @dose.save
      # cocktail GET  /cocktails/:id
      redirect_to cocktail_path(@cocktail)
    else
      render :new
    end
  end

  #  dose DELETE /doses/:id
  def destroy
    @dose = Dose.find(params[:id])
    @dose.destroy

    # cocktail GET  /cocktails/:id
    redirect_to cocktail_path(@dose.cocktail)
  end

  private

  def dose_params
    # Simple form pass back ingredient_id instead of ingredient (can put a raise here to check params)
    params.require(:dose).permit(:description, :ingredient_id)
  end
end
