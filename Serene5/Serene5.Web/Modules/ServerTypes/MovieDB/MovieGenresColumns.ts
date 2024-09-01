import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MovieGenresRow } from "./MovieGenresRow";

export interface MovieGenresColumns {
    MovieGenreId: Column<MovieGenresRow>;
    MovieTitle: Column<MovieGenresRow>;
    GenreName: Column<MovieGenresRow>;
}

export class MovieGenresColumns extends ColumnsBase<MovieGenresRow> {
    static readonly columnsKey = 'MovieDB.MovieGenres';
    static readonly Fields = fieldsProxy<MovieGenresColumns>();
}