import { MovieForm, MovieRow, MovieService } from '@/ServerTypes/MovieDB';
import { Decorators, EntityDialog, ToolButton } from '@serenity-is/corelib';

@Decorators.registerClass('Serene5.MovieDB.MovieDialog')
export class MovieDialog extends EntityDialog<MovieRow, any> {
    protected getFormKey() { return MovieForm.formKey; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }

    protected form = new MovieForm(this.idPrefix);


    constructor() {
        super()
        this.form.Kind.changeSelect2(e =>{

            ['Title', 'Description', 'Storyline' , 'Year' , 'ReleaseDate' , 'Runtime' ,].forEach(field => {
                this.form[field].value = '';
            });

            this.form.GenreList.value = ""





        })
    }
    
    protected getToolbarButtons(): ToolButton[] {
        let buttons = super.getToolbarButtons();
        buttons.push({
            title: 'Temizle',
            icon: "fa-light  fa-ban ",
            cssClass: 'updateOfferButton',
            separator: 'left',
            onClick: () => {
                ['Title', 'Description', 'Storyline', 'Year', 'ReleaseDate', 'Runtime', 'Kind'].forEach(field => {
                    this.form[field].value = '';
                });

                this.form.GenreList.value = ""
            }
        });
        return buttons
    }


}