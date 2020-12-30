package com.yangsj.dao;

import com.yangsj.entity.ChartInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface ChartInfoDao {
    ChartInfo getOneChartInfo(String chartName);

    List<ChartInfo> getChartInfo();
    void updateOneChartInfo(Map paras);
}
