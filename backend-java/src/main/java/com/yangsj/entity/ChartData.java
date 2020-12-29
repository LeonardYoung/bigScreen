package com.yangsj.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChartData {
    String chartName;
    String seriesName;
    String data;
}
