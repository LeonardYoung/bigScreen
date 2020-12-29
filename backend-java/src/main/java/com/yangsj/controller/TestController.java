package com.yangsj.controller;

import com.yangsj.dao.ChartDataDao;
import com.yangsj.entity.ChartData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    @GetMapping("/test")
    public String test(){
        return "OK";
    }

    @Autowired
    ChartDataDao chartDataDao;

    @GetMapping("/getAllChartData")
    public List<ChartData> getAllChartData(){
        return chartDataDao.getChartData();
    }
}
