import { MovieColumns, MovieRow, MovieService } from '@/ServerTypes/MovieDB';
import { Decorators, EntityGrid, first, localText, LookupEditor, QuickSearchField } from '@serenity-is/corelib';
import { MovieDialog } from './MovieDialog';
import { MovieListRequest } from '@/ServerTypes/MovieDB/MovieListRequest';
@Decorators.registerClass('Serene5.MovieDB.MovieGrid')



export class MovieGrid extends EntityGrid<MovieRow> {
    protected getQuickSearchFields(): QuickSearchField[] {
        const txt = s => localText(`Db.${MovieRow.localTextPrefix}.${s}`);
        const fld = MovieRow.Fields;
        return [
            { name: "", title: "All" },
            { name: fld.Description, title: txt(fld.Description) },
            { name: fld.Storyline, title: txt(fld.Storyline) },
            { name: fld.Year, title: txt(fld.Year) }

        ];


    }
    protected getQuickFilters() {
        let items = super.getQuickFilters();

        const genreListFilter = first(items, x =>
            x.field == MovieRow.Fields.GenreList);

        genreListFilter.handler = h => {
            const request = (h.request as MovieListRequest);
            const values = (h.widget as LookupEditor).values;
            request.Genres = values.map(x => parseInt(x, 10));
            h.handled = true;
        };

        return items;
    }
    protected getColumnsKey() { return MovieColumns.columnsKey; }
    protected getDialogType() { return MovieDialog; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }
}