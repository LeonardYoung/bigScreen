package com.yangsj.dao;

import com.yangsj.entity.ChartData;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ChartDataDao {
    List<ChartData> getChartData();
}
