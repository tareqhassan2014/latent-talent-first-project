"use client";

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Home() {
    const chartOptions = {
        // Colors
        colors: [
            // theme.palette.primary.main,
            // theme.palette.warning.main,
            // theme.palette.info.main,
            // theme.palette.error.main,
            // theme.palette.success.main,
            // theme.palette.warning.dark,
            // theme.palette.success.darker,
            // theme.palette.info.dark,
            // theme.palette.info.darker,
            "#3652bb",
            "#a6d4e4",
        ],

        // Chart
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            // animations: { enabled: false },
            // foreColor: theme.palette.text.disabled,
            // fontFamily: theme.typography.fontFamily,
        },

        // States
        states: {
            hover: {
                filter: {
                    type: "lighten",
                    value: 0.04,
                },
            },
            active: {
                filter: {
                    type: "darken",
                    value: 0.88,
                },
            },
        },

        // Fill
        fill: {
            opacity: 1,
            gradient: {
                type: "vertical",
                shadeIntensity: 0,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 100],
            },
        },

        // Datalabels
        dataLabels: {
            enabled: false,
        },

        // Stroke
        stroke: {
            width: 3,
            curve: "straight",
            lineCap: "round",
        },

        // Grid
        grid: {
            strokeDashArray: 3,
            // borderColor: theme.palette.divider,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },

        // Xaxis
        xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
        },

        // Markers
        markers: {
            size: 0,
            // strokeColors: theme.palette.background.paper,
        },

        // Tooltip
        tooltip: {
            theme: false,
            x: {
                show: true,
            },
        },

        // Legend
        legend: {
            show: true,
            fontSize: 13,
            position: "top",
            horizontalAlign: "right",
            markers: {
                radius: 12,
            },
            fontWeight: 500,
            itemMargin: {
                horizontal: 8,
            },
            labels: {
                // colors: theme.palette.text.primary,
            },
        },

        // plotOptions
        plotOptions: {
            // Bar
            bar: {
                // borderRadius: smUp ? 3 : 1,
                columnWidth: "28%",
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
            },

            // Pie + Donut
            pie: {
                donut: {
                    labels: {
                        show: true,
                        // value: LABEL_VALUE,
                        // total: LABEL_TOTAL,
                    },
                },
            },

            // Radialbar
            radialBar: {
                track: {
                    strokeWidth: "100%",
                    // background: alpha(theme.palette.grey[500], 0.16),
                },
                dataLabels: {
                    // value: LABEL_VALUE,
                    // total: LABEL_TOTAL,
                },
            },

            // Radar
            radar: {
                polygons: {
                    fill: { colors: ["transparent"] },
                    // strokeColors: theme.palette.divider,
                    // connectorColors: theme.palette.divider,
                },
            },

            // polarArea
            // polarArea: {
            //     rings: {
            //         strokeColor: theme.palette.divider,
            //     },
            //     spokes: {
            //         connectorColors: theme.palette.divider,
            //     },
            // },
        },

        // Responsive
        responsive: [
            {
                // sm
                // breakpoint: theme.breakpoints.values.sm,
                options: {
                    plotOptions: { bar: { columnWidth: "40%" } },
                },
            },
            {
                // md
                // breakpoint: theme.breakpoints.values.md,
                options: {
                    plotOptions: { bar: { columnWidth: "32%" } },
                },
            },
        ],
    };

    const data = [
        {
            name: "Total Income",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
        },
        {
            name: "Total Expenses",
            data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
        },
    ];

    return (
        <div className="bg-white h-screen">
            <ApexChart
                dir="ltr"
                type="area"
                series={data}
                options={chartOptions}
                width="100%"
                height={364}
            />
        </div>
    );
}
