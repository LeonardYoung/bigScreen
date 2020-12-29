package com.yangsj.dao;

import com.yangsj.entity.ChartData;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface ChartDataDao {
    List<ChartData> getChartData();

    String getOneData(Map paraMap);
}
