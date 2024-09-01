import { MovieGenresColumns, MovieGenresRow, MovieGenresService } from '@/ServerTypes/MovieDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { MovieGenresDialog } from './MovieGenresDialog';

@Decorators.registerClass('Serene5.MovieDB.MovieGenresGrid')
export class MovieGenresGrid extends EntityGrid<MovieGenresRow> {
    protected getColumnsKey() { return MovieGenresColumns.columnsKey; }
    protected getDialogType() { return MovieGenresDialog; }
    protected getRowDefinition() { return MovieGenresRow; }
    protected getService() { return MovieGenresService.baseUrl; }
}