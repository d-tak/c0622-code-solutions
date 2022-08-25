select "countries"."name" as "countryName",
count("cityId") as "cities"
from "countries"
join "cities" using ("countryId")
group by "countryId";
