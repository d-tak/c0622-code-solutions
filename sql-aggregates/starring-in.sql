select  "name" as "genre name",
        count("genres"."name") as "genres names"
from    "genres"

join    "filmGenre" using ("genreId")
join    "castMembers" using ("filmId")
join    "films" using ("filmId")
join    "actors" using ("actorId")

where   "firstName" = 'Lisa' and "lastName" = 'Monroe'

group by "genres"."name";
