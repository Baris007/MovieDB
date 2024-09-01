import { GenreColumns, GenreRow, GenreService } from '@/ServerTypes/MovieDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GenreDialog } from './GenreDialog';

@Decorators.registerClass('Serene5.MovieDB.GenreGrid')
export class GenreGrid extends EntityGrid<GenreRow> {
    protected getColumnsKey() { return GenreColumns.columnsKey; }
    protected getDialogType() { return GenreDialog; }
    protected getRowDefinition() { return GenreRow; }
    protected getService() { return GenreService.baseUrl; }
}