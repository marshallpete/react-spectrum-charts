/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
import React, { ReactElement } from 'react';

import useChartProps from '@hooks/useChartProps';
import { Area, Axis, Chart, ChartProps } from '@rsc';
import { ComponentStory } from '@storybook/react';
import { bindWithProps } from 'test-utils/bindWithProps';

export default {
	title: 'RSC/Area',
	component: Area,
	argTypes: {
		/*onClick: {
            control: {
                type: "object",
            },
        },*/
	},
};

const data = [
	{ datetime: 1667890800000, maxTemperature: 73, minTemperature: 47, series: 'Add Fallout' },
	{ datetime: 1667977200000, maxTemperature: 70, minTemperature: 48, series: 'Add Fallout' },
	{ datetime: 1668063600000, maxTemperature: 73, minTemperature: 48, series: 'Add Fallout' },
	{ datetime: 1668150000000, maxTemperature: 56, minTemperature: 31, series: 'Add Fallout' },
	{ datetime: 1668236400000, maxTemperature: 41, minTemperature: 18, series: 'Add Fallout' },
	{ datetime: 1668322800000, maxTemperature: 60, minTemperature: 45, series: 'Add Fallout' },
	{ datetime: 1668409200000, maxTemperature: 64, minTemperature: 43, series: 'Add Fallout' },
];

const defaultChartProps: ChartProps = { data, minWidth: 400, maxWidth: 800, height: 400 };

const BasicStory: ComponentStory<typeof Area> = (args): ReactElement => {
	const chartProps = useChartProps({ ...defaultChartProps });
	return (
		<Chart {...chartProps}>
			<Area {...args} />
		</Chart>
	);
};

const AreaTimeStory: ComponentStory<typeof Area> = (args): ReactElement => {
	const chartProps = useChartProps({ ...defaultChartProps });
	return (
		<Chart {...chartProps}>
			<Axis position="bottom" labelFormat="time" baseline />
			<Axis position="left" title="Temperature (F)" grid />
			<Area {...args} />
		</Chart>
	);
};

const Basic = bindWithProps(BasicStory);
Basic.args = { metric: 'maxTemperature' };

const BasicFloating = bindWithProps(BasicStory);
BasicFloating.args = { metricStart: 'minTemperature', metricEnd: 'maxTemperature' };

const Supreme = bindWithProps(AreaTimeStory);
Supreme.args = { metricStart: 'minTemperature', metricEnd: 'maxTemperature', opacity: 0.6 };

export { Basic, BasicFloating, Supreme };
