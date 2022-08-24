select "line1",
       "city"."name",
       "district",
       "country"."name"

from   "addresses"
join   "cities" as "city" using ("cityId")
join   "countries" as "country" using ("countryId");
