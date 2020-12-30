package com.yangsj.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChartInfo {
    String chart_name;
    String title;
    String categorys;
    String series;
}
