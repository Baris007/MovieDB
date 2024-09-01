import { ServiceLookupEditor, LookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface MovieGenresForm {
    MovieId: ServiceLookupEditor;
    GenreId: LookupEditor;
}

export class MovieGenresForm extends PrefixedContext {
    static readonly formKey = 'MovieDB.MovieGenres';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MovieGenresForm.init)  {
            MovieGenresForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = LookupEditor;

            initFormType(MovieGenresForm, [
                'MovieId', w0,
                'GenreId', w1
            ]);
        }
    }
}