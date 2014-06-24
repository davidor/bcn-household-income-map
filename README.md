This simple application shows a map of the Barcelona neighborhoods where each one
of them is painted with a different color according to its mean household income.

The Barcelona city council uses a metric called RFD (Renta Familiar Disponible)
to represent the household income. The mean household income of the city is
RFD = 1000. So for example, a neighborhood where the household income is the
double of the city mean has RFD = 2000.

I got all the data from the <a href="http://opendata.bcn.cat/opendata/es/">
open data service</a> of the Barcelona city council.
The RFD data can be found <a href="http://opendata.bcn.cat/opendata/es/catalog/RENTA">here</a>
and the geographic data <a href="www.bcn.cat/cartobcn/">here</a> 

I used the <a href="http://hpneo.github.io/gmaps/">gmaps.js library</a> to draw the map.
