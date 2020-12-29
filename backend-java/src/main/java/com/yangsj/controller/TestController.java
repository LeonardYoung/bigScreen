package com.yangsj.controller;

import com.yangsj.dao.ChartDataDao;
import com.yangsj.entity.ChartData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/getOneChartData")
    public String getOneChartData(
            @RequestParam("chartName") String chartName,
            @RequestParam("seriesName") String seriesName
    ){
        System.out.println(chartName +"----"+ seriesName);
        HashMap<String,String> paras = new HashMap<>();
        paras.put("chartName",chartName);
        paras.put("seriesName",seriesName);
        return chartDataDao.getOneData(paras);
    }
}
