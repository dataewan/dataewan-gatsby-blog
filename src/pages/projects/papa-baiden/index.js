
import React, { Component} from 'react';

import {
  Section, Subsection, Subsubsection, Paragraph, Code, RawHTML, Figure
} from '../../../components';

import spreadsheet from './spreadsheet-problems.png'
import hexgrid from './hexgrid.png'
import visualisation from './visualisation.png'

class PapaBaiden extends React.Component {
  render() {
    return (
      <Section name="Papa Baiden">
        <Paragraph>
          I did a project to study homlessness data in England as part of a voluntary program.
          I created a data processing pipeline in python,
          and an interactive data visualisation in react/d3.
          You can find the visualisation <a href="https://dataewan.github.io/tomorrow-today/">here</a>.
        </Paragraph>
        <Subsection name='vizforsocialgood'>
          <Paragraph>
            I found a link to <a href="https://www.vizforsocialgood.com/">vizforsocialgood.com</a> on twitter.
            They have a visualisation project underway all the time.
            The project that I worked on was from <a href="https://www.vizforsocialgood.com/join-a-project/2018/1/1/tomorrow-today-papa-baiden">Papa Baiden</a>, a charity based in London.
            The project aim was to meet this requirement: <i>We need an in-depth dashboard that helps people understand the homelessness issues. The data visualisations will be featured on the website, Facebook group, Twitter, and Instagram.</i>
          </Paragraph>
        </Subsection>
        <Subsection name="The raw data">
          <Paragraph>
            The raw data came from two sources. First are some spreadsheets containing official UK government figures, called <a href="https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/585706/Rough_Sleeping_Autumn_2016_Final_Tables.xls">Rough_Sleeping_Autumn_2016_Final_Tables</a> which contains statistics on rough sleeping, 
            and <a href="https://www.gov.uk/government/statistical-data-sets/live-tables-on-dwelling-stock-including-vacants">LT_615</a>, which contains information on vacant properties in each region.
          </Paragraph>
          <Paragraph>
            These spreadsheets were fairly tricky to work with.
            The tabular data only really makes sense when you are a human reading it:
            there's a hierarchy in the regional data that is described by empty cells.
            The codes for the regions changed at a point in time, which causes the gaps in the data in Figure 1.
            The description of this change was recorded in quite bureaucratic language in a cell at the bottom of the spreadsheet.
          </Paragraph>
          <Figure
            fullwidth={false}
            caption="Problems in the spreadsheet data caused by codes changing."
          >
            <img src={spreadsheet} />
          </Figure>
          <Paragraph>
            I think this is a really good illustration of how hard it is to maintain a publicly accessible dataset.
            The UK government invest a lot of time and effort in making this data available,
            and they generally do an excellent job.
            Even they find it difficult to make a correct and complete dataset in machine readable format.
            I wrote python code to parse these spreadsheets to make them repeatable.
            The code <a href="https://github.com/dataewan/papabaiden-vizforgood-/blob/master/src/data/extract_lt_data.py">is complex</a>, with lots of logic to catch edge cases. 
            I'm not sure that I would take this approach again.
          </Paragraph>
        </Subsection>
        <Subsection name="hexgridmap">
          <Paragraph>
            Since this is a project I'm doing in my spare time,
            I allowed myself to get lost in interesting ideas that don't have a clear payoff.
            The biggest example is that I tried to avoid using a <i>choropleth map</i>.
            These are the nice looking maps where geographic areas are shaded to represent a variable.
            The problem with these maps is that while they look nice,
            they do a bad job at presenting information.
            It makes areas that are bigger look more important just because they have a larger area,
            you get a distorted picture.
          </Paragraph>
          <Figure
            caption={<div>Illustration from <a href="http://thewhyaxis.info/bitly/">thewhyaxis.info</a>. Not that many people read The Scotsman</div>}
          >
            <img src="http://thewhyaxis.info/content/24-bitly/mediamap-in1.jpg" />
          </Figure>
          <Paragraph note={<a href="https://www.redblobgames.com/grids/hexagons/">redblobgames</a>}>
            To get around this problem, sometimes people use a hexagonal grid.
            You assign each region to a hexagon,
            and then try and arrange the hexagons on the grid to try and get them to represent geographic relationships.
            Hexagons are good because they are a regular shape,
            you can make them have all the same area,
            and hexagons have a lot of neighbours.
            The geometry of hexagons is more complex than standard cartesian coordinates,
            but fortunately there is fascinating tutorial from redblobgames that takes you through the geometry.
          </Paragraph>

          <Paragraph>
            I worked on a python package (<a href="https://github.com/dataewan/hexgridmap">hexgridmap</a>) to convert from shapefiles to hexgridmaps.
            The geometry works well,
            and converting a shapefile to python objects also works well.
            I tried a few methods for getting a good assignment.
            <ul>
              <li>Assigning each region naively to the nearest hex on the grid. Where there are overlaps (multiple regions assigned to the same hex) sort them out by pushing them outwards. This sort of works, but doesn't keep neighbouring regions close together.</li>
              <li>Try and create a function that describes a good placement, and use optimisation techniques like simulated annealing. This is less time consuming, but I couldn't find a good function to describe a good placement. You get something that is very happy once it sorts out all the overlaps, and is happy to achieve that by scattering regions all over the place.</li>
              <li>I was starting to work on a branch that would create contiguous islands, and then place these next to each other. I stopped myself after just starting to explore this, and is where I would pick up again.</li>
            </ul>
          </Paragraph>
          <Figure
            caption={"Results from a naive assignment and then pushing overlaps out. The general shape looks okay, but note that the regions in red are from Greater London, and get spread out too much. We end up with Ealing on the coast."}
          >
            <img src={hexgrid} />
          </Figure>

          <Paragraph>
            I stopped working on this thread of work after a few sessions,
            because I wanted to meet the deadline.
          </Paragraph>
        </Subsection>
        <Subsection name="Building the visualisation">
          <Paragraph>
            I used react and d3 to build the visualisation.
            All the interaction and DOM object creation and handling is done by react.
            Only using d3 for the convenience functions for creating things like scales that map between data and pixel space,
            or creating SVG path specifications from geographic data.
          </Paragraph>
          <Figure
            caption={<div>How the final <a href="https://dataewan.github.io/tomorrow-today/">visualisation</a> looks.</div>}
            fullwidth={false}>
            <img src={visualisation} />
          </Figure>
          <Subsubsection name="What worked well">
            <Paragraph>
              I like the interactivity, it works smoothly.
              React handling state is a very good way of working.
              It wasn't complex enough for me to need to reach for Redux, but not far off.
              In particular I like the interaction between the table and the maps.
            </Paragraph>
            <Paragraph>
              I like the scrolly bit in the left.
              You're able to scroll over that bit, while highlighting parts of the visualisation.
              That's quite neat.
            </Paragraph>
          </Subsubsection>
          <Subsubsection name="What didn't work well">
            <Paragraph>
              I didn't do a good job of figuring out how the interactivity was going to work beforehand.
              Also I don't think I did a good job of making it clear what things can be clicked on.
              The interactivity is unclear.
            </Paragraph>
            <Paragraph>
              I think that the display is quite full, I wanted there to be more white space and for it to look neater.
              These both point to me needing to learn more about UI and design.
            </Paragraph>
          </Subsubsection>
        </Subsection>
      </Section>
    );
  }
}

export default PapaBaiden
